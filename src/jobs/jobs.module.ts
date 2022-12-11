import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller';
import { JobProfile } from '../profile/job.profile';
import { Job } from '../jobs/entities/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [JobsController],
  providers: [JobsService, JobProfile]
})
export class JobsModule {}
