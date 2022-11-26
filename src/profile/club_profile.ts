import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import Club from '../clubs/entity/club.entity';
import UpdateClubDto from '../clubs/dto/update-club.dto';
import CreateClubDto from '../clubs/dto/create-club.dto';
import GetClubDto from '../clubs/dto/get-club.dto';

@Injectable()
export class ClubProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Club, GetClubDto);
      createMap(mapper, CreateClubDto, Club, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateClubDto, Club);
    };
  }
}
