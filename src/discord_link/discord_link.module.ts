import { Module } from '@nestjs/common';
import { DiscordLinkService } from './discord_link.service';
import { DiscordLinkController } from './discord_link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import DiscordLink from './entity/discord_link.entity';
import { DiscordLinkProfile } from '../profile/discord_link.profile';

@Module({
  imports: [TypeOrmModule.forFeature([DiscordLink])],
  controllers: [DiscordLinkController],
  providers: [DiscordLinkService, DiscordLinkProfile]
})
export class DiscordLinkModule {}
