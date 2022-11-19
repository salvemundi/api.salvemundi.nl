import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import OldBoard from './entity/old_board.entity';
import { OldBoardService } from './old_board.service';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import GetOldboardDto from './dto/get-old_board.dto';
import CreateOldBoardDto from './dto/create-old_board.dto';
import UpdateOldBoardDto from './dto/update-old_board.dto';

@Controller('old_board')
export class OldBoardController {
  constructor(
    private readonly oldBoardService: OldBoardService,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.oldBoardService.findAll(),
      OldBoard,
      GetOldboardDto,
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.oldBoardService.findOne(id),
      OldBoard,
      GetOldboardDto,
    );
  }

  @Post('/')
  public async create(@Body() createOldBoardDto: CreateOldBoardDto) {
    const oldBoard = this.classMapper.map(
      createOldBoardDto,
      CreateOldBoardDto,
      OldBoard,
    );

    return this.classMapper.mapAsync(
      await this.oldBoardService.create(oldBoard),
      OldBoard,
      GetOldboardDto,
    );
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateOldBoardDto: UpdateOldBoardDto) {
    const oldBoard = this.classMapper.map(
      updateOldBoardDto,
      UpdateOldBoardDto,
      OldBoard,
    );

    return this.classMapper.mapAsync(
      await await this.oldBoardService.update(id, oldBoard),
      OldBoard,
      GetOldboardDto,
    );
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.oldBoardService.remove(id);
  }
}
