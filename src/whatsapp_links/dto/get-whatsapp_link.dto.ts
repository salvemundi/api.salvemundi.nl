import { PartialType } from '@nestjs/mapped-types';
import { CreateWhatsappLinkDto } from './create-whatsapp_link.dto';
import { AutoMap } from "@automapper/classes";

export class GetWhatsappLinkDto {
    @AutoMap()
    readonly id: string;

    @AutoMap()
    readonly link: string;

    @AutoMap()
    readonly name: string;

    @AutoMap()
    readonly description: string;

    @AutoMap()
    readonly created_at: Date;

    @AutoMap()
    readonly updated_at: Date;
}
