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
  private _graphHelper: GraphHelper;
  private _graphClient;

  constructor(
    private graphHelper: GraphHelper,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this._graphHelper = graphHelper;
    this._graphClient = this._graphHelper.getAppClient();
  }

  /**
   * Retrieves all users.
   * @returns The users.
   */
  public async getUsersAsync(/*page: Number = 1*/): Promise<string> {
    return this._graphClient
      ?.api('/users')
      .select(['id', 'givenName', 'surName', 'mobilePhone', 'mail'])
      .top(25)
      .orderby('displayName')
      .get();
  }

  /**
   * Signups new user to database.
   * @param user The user to sign up.
   * @returns Whether the sign up was successful.
   */
  public async signUpUser(user: User): Promise<boolean> {
    try {
      // Check if the user exists
      // If so, let's append a number.
      const existingUsers = await this.findUsersByName("Test", "User");
      let suffix = "";

      if(existingUsers.length > 0)
        suffix = `${existingUsers.length + 1}`;

      user.email = user.first_name + ((user.insertion != null) ? `.${user.insertion}.` : '.') + user.last_name + suffix + process.env.SAMU_MEMBER_EMAIL_DOMAIN;

      await this.createAzureAccount(user, suffix);
      await this.userRepository.save(user);
      return true;
    } catch (e) {
      console.error(`Can't sign up user due to following exception:`);
      console.error(e);
      return false;
    }
  }

  /**
   * Creates an azure account.
   * @param firstName first name of the user
   * @param lastName last name of the user
   * @returns all users with the same first and lastname
   */
  private async findUsersByName(firstName: string, lastName: string) : Promise<User[]> {
    return await this.userRepository.findBy({ first_name: firstName, last_name: lastName });
  }

  /**
   * Creates an azure account.
   * @param user The user to create.
   * @param suffix The user suffix to append.
   * @returns user who has been created in Azure
   */
  private async createAzureAccount(user: User, suffix = "") : Promise<User> {
    // Transform user object to suitable azure account object
    return await this._graphClient?.api('/users').post({
      accountEnabled: true,
      displayName: user.first_name + ((user.insertion != null) ? ` ${user.insertion} ` : ' ') + user.last_name,
      mailNickname: user.first_name,
      givenName: user.first_name,
      surname: user.last_name,
      mobilePhone: user.phone_number,
      userPrincipalName:
        user.first_name + ((user.insertion != null) ? `.${user.insertion}.` : '.') + user.last_name + suffix + process.env.SAMU_MEMBER_EMAIL_DOMAIN,
      mail:
        user.first_name + ((user.insertion != null) ? `.${user.insertion}.` : '.') + user.last_name + suffix + process.env.SAMU_MEMBER_EMAIL_DOMAIN,
      passwordProfile: {
        forceChangePasswordNextSignIn: true,
        password: process.env.DEFAULT_AZURE_PASSWORD,
      },
    });
  }
}
