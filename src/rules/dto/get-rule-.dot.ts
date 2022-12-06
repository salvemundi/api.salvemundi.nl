import { AutoMap } from '@automapper/classes';

export class GetRuleDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    public name: string;
}
