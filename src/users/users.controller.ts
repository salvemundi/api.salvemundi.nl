import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import User from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService) {}
    @Post('/')
    public createUser(
        @Body() user:User,

    ):Promise<User> {
        return this.usersService.createUser(user);
    }
}
