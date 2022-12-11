import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {
  }

  public async create(Job: Job): Promise<Job> {
    await this.checkIfJobAlreadyExists(Job);
    return await this.jobRepository.save(Job);
  }

  public async findAll(): Promise<Job[]> {
    return await this.jobRepository.find();
  }

  public async findOne(id: string): Promise<Job> {
    let Job = await this.jobRepository.findOneBy({id: id});

    if(Job == null) {
      throw new NotFoundException('Job cannot be found!');
    }

    return Job;
  }

  public async update(id: string, Job: Job): Promise<Job> {
    await this.jobRepository.update(id, Job);

    return await this.findOne(id);
  }

  public async remove(id: string): Promise<void> {
    await this.jobRepository.delete(id);
  }

  private async checkIfJobAlreadyExists(Job: Job) {
    let foundJob = await this.jobRepository.findOneBy({link: Job.link})

    if(foundJob != null) {
      throw new BadRequestException('Job already exists!');
    }
  }
}
