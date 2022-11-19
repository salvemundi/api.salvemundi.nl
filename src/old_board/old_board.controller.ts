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

@Controller('old_board')
export class OldBoardController {
  constructor(private readonly oldBoardService: OldBoardService) {}

  @Get()
  public async findAll() {
    return await this.oldBoardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oldBoardService.findOne(id);
  }

  @Post('/')
  public createPlayer(@Body() oldBoard: OldBoard) {
    this.oldBoardService.create(oldBoard);
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() oldBoard: OldBoard) {
    return await this.oldBoardService.update(id, oldBoard);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.oldBoardService.remove(id);
  }
}
