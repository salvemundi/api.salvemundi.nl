import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import CreateNewsDto from './dto/create-news.dto';
import GetNewsDto from './dto/get-news.dto';
import UpdateNewsDto from './dto/update-news.dto';
import News from '../news/entity/news.entity';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  @Post('/')
  public async create(@Body() createNewsDto: CreateNewsDto) {
    const news = this.classMapper.map(
      createNewsDto,
      CreateNewsDto,
      News,
    );
    
    return this.classMapper.mapAsync(
      await this.newsService.create(news),
      News,
      GetNewsDto,
    );
  }

  @Get()
  public async findAll() {
    return this.classMapper.mapArrayAsync(
      await this.newsService.findAll(),
      News,
      GetNewsDto,
    );
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.classMapper.mapAsync(
      await this.newsService.findOne(id),
      News,
      GetNewsDto,
    );
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    const news = this.classMapper.map(updateNewsDto, UpdateNewsDto, News);

    return this.classMapper.mapAsync(
      await this.newsService.update(id, news),
      News,
      GetNewsDto,
    );
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.newsService.remove(id);
  }
}
