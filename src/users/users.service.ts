import { Injectable } from '@nestjs/common';
import User from './entity/user.entity';
import GraphHelper from '../graphHelper';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  /**
   * The graph helper for azure.
   */
  private _graphHelper : GraphHelper;
  private _graphClient;

  constructor (private readonly graphHelper:GraphHelper, @InjectRepository(User)
    private userRepository: Repository<User>) {
    this._graphHelper = graphHelper;
    this._graphClient = this._graphHelper.getAppClient();
  }

  /**
   * Retrieves all users.
   * @returns {Promise<String>} The users.
   */
  public async getUsersAsync(): Promise<String> {
    let result = this._graphClient?.api('/users')
      .select(['id', 'givenName', 'surName', 'mobilePhone', 'mail'])
      .top(25)
      .orderby('displayName')
      .get();

    return result;
  }

  /**
   * Signups new user to database.
   * @param {User} user The user to sign up.
   * @returns {Promise<boolean>} Whether the sign up was successful.
   */
  public async signUpUser(user:User): Promise<boolean> {
    this.userRepository.save(user);

    let azureResponse = await this.createAzureAccount(user);

    if (!azureResponse.IsSuccessStatusCode) {
      try {
        throw new Error('Azure create account request failed!');
        return false;
      }
      catch(e) {
        console.log(e);
      }
    }
    else {
      return true;
    }
  }

  /**
   * Creates an azure account.
   * @param {User} user The user to create.
   */
  private async createAzureAccount(user:User) {
    // Transform user object to suitable azure account object

    const azureUser = {
      accountEnabled: true,
      displayName: user.first_name + " " + user.last_name,
      mailNickname: user.first_name + user.last_name.charAt(0).toUpperCase(),
      userPrincipalName: user.first_name + "." + user.last_name + process.env.SAMU_MEMBER_EMAIL_DOMAIN,
      passwordProfile: {
        forceChangePasswordNextSignIn: true,
        password: process.env.DEFAULT_AZURE_PASSWORD
      }
    };

    return await this._graphClient?.api('/users').post(azureUser);
  }
}
