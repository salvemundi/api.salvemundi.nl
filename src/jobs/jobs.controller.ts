import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Job } from './entities/job.entity';
import { GetJobDto } from './dto/get-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(
      private readonly jobService: JobsService,
      @InjectMapper() private readonly classMapper: Mapper,
    ) {}

  @Post()
  public async create(@Body() createJobDto: CreateJobDto): Promise<GetJobDto> {
    let job = this.classMapper.map(
      createJobDto,
      CreateJobDto,
      Job
    );

    return this.classMapper.mapAsync(
      await this.jobService.create(job),
      Job,
      GetJobDto
    );
  }

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.jobService.findAll(),
      Job,
      GetJobDto
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.jobService.findOne(id),
      Job,
      GetJobDto
    );
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    let job = this.classMapper.map(
      updateJobDto,
      UpdateJobDto,
      Job
    );

    return this.classMapper.mapAsync(
      await this.jobService.update(id, job),
      Job,
      GetJobDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}
