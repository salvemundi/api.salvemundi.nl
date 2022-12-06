import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import Rule from './entities/rule.entity';

@Injectable()
export class RulesService {

  constructor(
    @InjectRepository(Rule)
    private ruleRepository: Repository<Rule>,
  ) {}
  public async create(createRuleDto: CreateRuleDto) {
    return await this.ruleRepository.save(createRuleDto);

  }

  public async findAll(): Promise<Rule[]> {
    return await this.ruleRepository.find();

  }

  public async findOne(id: string) {
    const rule = await this.ruleRepository.findOneBy({ id: id });
    if (rule == null) {
      throw new NotFoundException('Board with id: ' + id + ' can not be found');
    }
    return rule;
  }

  public async update(id: string, updateRuleDto: UpdateRuleDto) {
    await this.ruleRepository.update(id, updateRuleDto);

    return this.findOne(id);
  }

  public async remove(id: string) {
    await this.ruleRepository.delete(id);
  }
}
