import { Controller, Get, Post, Query } from '@nestjs/common';
import User from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService) {}
    @Get('/')
    public createUser(
        @Query('name') name:string,

    ):Promise<User> {
        return this.usersService.createUser(name);
    }
}
