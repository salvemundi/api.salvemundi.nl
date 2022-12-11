import { Injectable, NotFoundException } from '@nestjs/common';
import News from '../news/entity/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  public async create(news: News): Promise<News> {
    return await this.newsRepository.save(news);
  }

  public async findAll(): Promise<News[]> {
    return await this.newsRepository.find();
  }

  public async findOne(id: string): Promise<News> {
    const news = await this.newsRepository.findOneBy({ id: id });
    if (news == null) {
      throw new NotFoundException('News with id: ' + id + ' can not be found');
    }

    return news;
  }

  public async update(id: string, news: News): Promise<News> {
    await this.newsRepository.update(id, news);

    return this.findOne(id);
  }

  public async remove(id: string) {
    await this.newsRepository.delete(id);
  }
}
