import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import News from '../news/entity/news.entity';
import GetNewsDto from '../news/dto/get-news.dto';
import CreateNewsDto from '../news/dto/create-news.dto';
import UpdateNewsDto from '../news/dto/update-news.dto';

@Injectable()
export class NewsProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, News, GetNewsDto);
      createMap(mapper, CreateNewsDto, News, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateNewsDto, News);
    };
  }
}
