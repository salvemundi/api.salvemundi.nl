import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappLinksService } from './whatsapp_links.service';
import { CreateWhatsappLinkDto } from './dto/create-whatsapp_link.dto';
import { UpdateWhatsappLinkDto } from './dto/update-whatsapp_link.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { WhatsappLink } from './entities/whatsapp_link.entity';
import { GetWhatsappLinkDto } from './dto/get-whatsapp_link.dto';

@Controller('whatsapp_links')
export class WhatsappLinksController {
  constructor(
      private readonly whatsappLinksService: WhatsappLinksService,
      @InjectMapper() private readonly classMapper: Mapper,
    ) {}

  @Post()
  public async create(@Body() createWhatsappLinkDto: CreateWhatsappLinkDto): Promise<GetWhatsappLinkDto> {
    let whatsAppLink = this.classMapper.map(
      createWhatsappLinkDto,
      CreateWhatsappLinkDto,
      WhatsappLink
    );

    return this.classMapper.mapAsync(
      await this.whatsappLinksService.create(whatsAppLink),
      WhatsappLink,
      GetWhatsappLinkDto
    );
  }

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.whatsappLinksService.findAll(),
      WhatsappLink,
      GetWhatsappLinkDto
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.whatsappLinksService.findOne(id),
      WhatsappLink,
      GetWhatsappLinkDto
    );
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateWhatsappLinkDto: UpdateWhatsappLinkDto) {
    let whatsAppLink = this.classMapper.map(
      updateWhatsappLinkDto,
      UpdateWhatsappLinkDto,
      WhatsappLink
    );

    return this.classMapper.mapAsync(
      await this.whatsappLinksService.update(id, whatsAppLink),
      WhatsappLink,
      GetWhatsappLinkDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappLinksService.remove(id);
  }
}
