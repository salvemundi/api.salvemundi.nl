import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import Finance from '../finance/entities/finance.entity';
import GetFinanceDto from '../finance/dto/get-finance.dto';
import CreateFinanceDto from '../finance/dto/create-finance.dto';
import UpdateFinanceDto from '../finance/dto/update-finance.dto';

@Injectable()
export class FinanceProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Finance, GetFinanceDto);
      createMap(mapper, CreateFinanceDto, Finance, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateFinanceDto, Finance);
    };
  }
}
