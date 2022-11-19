import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ClubService } from './club.service';
  import UpdateClubDto from './dtos/club.update.dto';
import Club from './entity/club.entity';
  
  @Controller('club')
  export class ClubController {
    constructor(private readonly clubService: ClubService) {}
  
    @Get()
    public async findAll() {
      return await this.clubService.findAll();
    }

    @Post('/')
    public async createClub(@Body() club: Club) {
        return await this.clubService.create(club);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.clubService.findOne(id);
    }
  
    @Patch(':id')
    public async update(@Param('id') id: string, @Body() setting: UpdateClubDto) {
      return await this.clubService.update(id, setting);
    }
  
    @Delete(':id')
    public async remove(@Param('id') id: string) {
      return await this.clubService.remove(id);
    }
  }
  