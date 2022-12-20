import { AutoMap } from '@automapper/classes';

export class CreateRuleDto {

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly pdf_path: string;
}
