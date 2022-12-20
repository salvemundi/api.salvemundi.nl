import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RulesService } from './rules.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import Rule from './entities/rule.entity';
import { GetRuleDto } from './dto/get-rule-.dot';

@Controller('rules')
export class RulesController {
  constructor(
    private readonly rulesService: RulesService,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  @Post()
  public async create(@Body() createRuleDto: CreateRuleDto) {
    let rule = this.classMapper.map(
      createRuleDto,
      CreateRuleDto,
      Rule
    );
    return this.classMapper.mapAsync(
      await this.rulesService.create(rule),
      Rule,
      GetRuleDto
    );
  }

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.rulesService.findAll(),
      Rule,
      GetRuleDto
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.rulesService.findOne(id),
      Rule,
      GetRuleDto
    );
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    let rule = this.classMapper.map(
      updateRuleDto,
      UpdateRuleDto,
      Rule
    );

    return this.classMapper.mapAsync(
      await this.rulesService.update(id, rule),
      Rule,
      GetRuleDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rulesService.remove(id);
  }
}
