import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import GraphHelper from '../graphHelper';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, GraphHelper],
})
export class UsersModule {}
