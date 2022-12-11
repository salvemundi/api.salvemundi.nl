import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Express } from 'express'
import { ClubService } from './club.service';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import UpdateClubDto from './dto/update-club.dto';
import Club from './entity/club.entity';
import GetClubDto from './dto/get-club.dto';
import CreateClubDto from './dto/create-club.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common';

  @Controller('club')
  export class ClubController {
    constructor(private readonly clubService: ClubService,
      @InjectMapper() private readonly classMapper: Mapper
    ) {}

    @Get()
    public async findAll() {
      return this.classMapper.mapArrayAsync(
        await this.clubService.findAll(),
        Club,
        GetClubDto
      );
    }

    @Post('/')
    @UseInterceptors(FileInterceptor('file'))
    public async create(@Body() createClubDto: CreateClubDto, @UploadedFile() file: Express.Multer.File) {
      console.log(file)
      let club = this.classMapper.map(
        createClubDto,
        CreateClubDto,
        Club
      );

      return this.classMapper.mapAsync(
        await this.clubService.create(club),
        Club,
        GetClubDto
      );
    }

    @Get(':id')
    public async findOne(@Param('id') id: string) {
      return this.classMapper.mapAsync(
        await this.clubService.findOne(id),
        Club,
        GetClubDto
      );
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
      let club = this.classMapper.map(
        updateClubDto,
        UpdateClubDto,
        Club
      );

      return this.classMapper.mapAsync(
        await this.clubService.update(id, club),
        Club,
        GetClubDto
      );
    }

    @Delete(':id')
    public async remove(@Param('id') id: string) {
      return await this.clubService.remove(id);
    }
}