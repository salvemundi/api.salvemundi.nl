import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import UpdateLinkDto from './dto/update-link.dto';
import DiscordLink from './entity/discord_link.entity';
import GetLinkDto from './dto/get-link.dto';
import CreateLinkDto from './dto/create-link.dto';
import { DiscordLinkService } from './discord_link.service';

  @Controller('discord_link')
  export class DiscordLinkController {
    constructor(private readonly linkService: DiscordLinkService,
      @InjectMapper() private readonly classMapper: Mapper
    ) {}

    @Get()
    public async findAll() {
      return this.classMapper.mapArrayAsync(
        await this.linkService.findAll(),
        DiscordLink,
        GetLinkDto
      );
    }

    @Post('/')
    public async create(@Body() createLinkDto: CreateLinkDto) {
      let link = this.classMapper.map(
        createLinkDto,
        CreateLinkDto,
        DiscordLink
      );

      return this.classMapper.mapAsync(
        await this.linkService.create(link),
        DiscordLink,
        GetLinkDto
      );
    }

    @Get(':id')
    public async findOne(@Param('id') id: string) {
      return this.classMapper.mapAsync(
        await this.linkService.findOne(id),
        DiscordLink,
        GetLinkDto
      );
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
      let link = this.classMapper.map(
        updateLinkDto,
        UpdateLinkDto,
        DiscordLink
      );

      return this.classMapper.mapAsync(
        await this.linkService.update(id, link),
        DiscordLink,
        GetLinkDto
      );
    }

    @Delete(':id')
    public async remove(@Param('id') id: string) {
      return await this.linkService.remove(id);
    }
}