import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import User from './entity/user.entity';
import { UsersService } from './users.service';
import { AzureADGuard } from '../guards/azure-ad.guard';

@Controller('users')
@UseGuards(AzureADGuard)
export class UsersController {
    constructor (private readonly usersService:UsersService) {}

    @Get('/')
    public async getUsersFromAzure() {
        return await this.usersService.getUsersAsync();
    }

    @Post('/')
    public async createUser(@Body() user: User) {
        return await this.usersService.signUpUser(user);
    }
}
