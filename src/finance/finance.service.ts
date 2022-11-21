import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Finance from './entities/finance.entity';

@Injectable()
export class FinanceService {
    constructor(
    @InjectRepository(Finance)
    private financeRepository: Repository<Finance>,
  ) {}

  public async create(finance: Finance): Promise<Finance> {
    return await this.financeRepository.save(finance);
  }

  public async findAll(): Promise<Finance[]> {
    return await this.financeRepository.find();
  }

  public async findOne(id: string): Promise<Finance> {
    const oldBoard = await this.financeRepository.findOneBy({ id: id });
    if (oldBoard == null) {
      throw new NotFoundException('Finance with id: ' + id + ' can not be found');
    }
    return oldBoard;
  }

  public async update(id: string, finance: Finance): Promise<Finance> {
    await this.financeRepository.update(id, finance);

    return this.findOne(id);
  }

  public async remove(id: string) {
    await this.financeRepository.delete(id);
  }
}