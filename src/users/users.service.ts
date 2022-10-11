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
  }

  /**
   * Creates an azure account.
   * @param {User} user The user to create.
   */
  private async createAzureAccount(user:User) {
    await this._graphClient?.api('/users').;
  }
}
