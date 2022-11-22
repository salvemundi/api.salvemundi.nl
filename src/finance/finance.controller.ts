import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { FinanceService } from './finance.service';
import CreateFinanceDto from './dto/create-finance.dto';
import UpdateFinanceDto from './dto/update-finance.dto';
import GetFinanceDto  from './dto/get-finance.dto';
import Finance from './entities/finance.entity';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Controller('finance')
export class FinanceController {
  constructor(
    private readonly financeService: FinanceService,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.financeService.findAll(),
      Finance,
      GetFinanceDto,
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.financeService.findOne(id),
      Finance,
      GetFinanceDto,
    );
  }

  @Post('/')
  public async create(@Body() createFinanceDto: CreateFinanceDto) {
    const finance = this.classMapper.map(
      createFinanceDto,
      CreateFinanceDto,
      Finance,
    );

    return this.classMapper.mapAsync(
      await this.financeService.create(finance),
      Finance,
      GetFinanceDto,
    );
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateFinanceDto: UpdateFinanceDto) {
    const finance = this.classMapper.map(
      updateFinanceDto,
      UpdateFinanceDto,
      Finance,
    );

    return this.classMapper.mapAsync(
      await await this.financeService.update(id, finance),
      Finance,
      GetFinanceDto,
    );
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.financeService.remove(id);
  }
}
