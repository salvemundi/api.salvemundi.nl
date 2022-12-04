import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import DiscordLink from '../discord_link/entity/discord_link.entity';
import UpdateLinkDto from '../discord_link/dto/update-link.dto';
import CreateLinkDto from '../discord_link/dto/create-link.dto';
import GetLinkDto from '../discord_link/dto/get-link.dto';

@Injectable()
export class DiscordLinkProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, DiscordLink, GetLinkDto);
      createMap(mapper, CreateLinkDto, DiscordLink, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateLinkDto, DiscordLink);
    };
  }
}
