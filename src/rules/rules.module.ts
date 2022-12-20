import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { RuleProfile } from 'src/profile/rule_profile';

@Module({
  controllers: [RulesController],
  providers: [RulesService, RuleProfile]
})
export class RulesModule {}
