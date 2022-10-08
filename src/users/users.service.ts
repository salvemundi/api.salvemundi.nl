import { Injectable } from '@nestjs/common';
import User from './entity/user.entity';

@Injectable()
export class UsersService {
    public createUser(userpam:User):Promise<User> {
        const user = new User();
        user.name = userpam.name;
        return user.save();
    }
}
