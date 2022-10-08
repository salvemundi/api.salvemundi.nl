import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import GraphHelper from '../graphHelper';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GraphHelper],
})
export class UsersModule {}
