import { Module } from '@nestjs/common';
import { WhatsappLinksService } from './whatsapp_links.service';
import { WhatsappLinksController } from './whatsapp_links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhatsappLink } from '../whatsapp_links/entities/whatsapp_link.entity';
import { WhatsappLinkProfile } from '../profile/whatsapp_link.profile';


@Module({
  imports: [TypeOrmModule.forFeature([WhatsappLink])],
  controllers: [WhatsappLinksController],
  providers: [WhatsappLinksService, WhatsappLinkProfile]
})
export class WhatsappLinksModule {}
