import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, ignore, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import Rule from '../rules/entities/rule.entity';
import { GetRuleDto } from '../rules/dto/get-rule-.dot';
import { CreateRuleDto } from '../rules/dto/create-rule.dto';
import { UpdateRuleDto } from '../rules/dto/update-rule.dto';

@Injectable()
export class RuleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Rule, GetRuleDto);
      createMap(mapper, CreateRuleDto, Rule, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateRuleDto, Rule);
    };
  }
}
