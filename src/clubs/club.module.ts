import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Club from './entity/club.entity';
import { ClubProfile } from '../profile/club_profile';

@Module({
  imports: [TypeOrmModule.forFeature([Club])],
  controllers: [ClubController],
  providers: [ClubService, ClubProfile]
})
export class ClubModule {}
