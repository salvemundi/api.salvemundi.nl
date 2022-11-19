import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import OldBoard from '../old_board/entity/old_board.entity';
import GetOldboardDto from '../old_board/dto/get-old_board.dto';
import CreateOldBoardDto from '../old_board/dto/create-old_board.dto';
import UpdateOldBoardDto from '../old_board/dto/update-old_board.dto';

@Injectable()
export class OldBoardProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, OldBoard, GetOldboardDto);
      createMap(mapper, CreateOldBoardDto, OldBoard, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateOldBoardDto, OldBoard);
    };
  }
}
