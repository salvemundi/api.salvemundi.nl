import { PartialType } from '@nestjs/mapped-types';
import { CreateRuleDto } from './create-rule.dto';
import { AutoMap } from '@automapper/classes';

export class UpdateRuleDto extends PartialType(CreateRuleDto) {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    public name: string;
}
