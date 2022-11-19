import { PartialType } from '@nestjs/mapped-types';
import { CreateWhatsappLinkDto } from './create-whatsapp_link.dto';
import { AutoMap } from "@automapper/classes";

export class UpdateWhatsappLinkDto {
    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly description: string;
}
