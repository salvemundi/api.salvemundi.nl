import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap, forMember, ignore, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { WhatsappLink } from "../whatsapp_links/entities/whatsapp_link.entity";
import { GetWhatsappLinkDto } from "../whatsapp_links/dto/get-whatsapp_link.dto";
import { CreateWhatsappLinkDto } from "../whatsapp_links/dto/create-whatsapp_link.dto";
import { UpdateWhatsappLinkDto } from "../whatsapp_links/dto/update-whatsapp_link.dto";

@Injectable()
export class WhatsappLinkProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, WhatsappLink, GetWhatsappLinkDto);
      createMap(mapper, CreateWhatsappLinkDto, WhatsappLink, forMember((dest) => dest.id, ignore()));
      createMap(mapper, UpdateWhatsappLinkDto, WhatsappLink);
    };
  }
}
