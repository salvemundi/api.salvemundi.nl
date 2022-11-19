import { AutoMap } from "@automapper/classes";

export class CreateWhatsappLinkDto {
    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly description: string;
}
