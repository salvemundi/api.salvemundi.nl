import { Injectable } from '@nestjs/common';
import User from './entity/user.entity';

@Injectable()
export class UsersService {
    public createUser(name:string):Promise<User> {
        const user = new User();
        user.name = name;
        return user.save();
    }
}
