import { Injectable } from '@nestjs/common';
import User from './entity/user.entity';
import GraphHelper from '../graphHelper';

@Injectable()
export class UsersService {
    constructor (private readonly graphHelper:GraphHelper) {}

    public async getUsersAsync(): Promise<String> {
        let _appClient = this.graphHelper.getAppClient();

        let result = _appClient?.api('/users')
          .select(['id', 'givenName', 'surName', 'mobilePhone', 'mail'])
          .top(25)
          .orderby('displayName')
          .get();

        return result;
    }
}
