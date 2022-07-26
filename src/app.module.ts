import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import User from './users/entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { SettingModule } from './setting/setting.module';
import { WhatsappLinksModule } from './whatsapp_links/whatsapp_links.module';
import { OldBoardModule } from './old_board/old_board.module';
import { ClubModule } from './clubs/club.module';
import { DiscordLinkModule } from './discord_link/discord_link.module';
import Setting from './setting/entity/setting.entity';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { WhatsappLink } from './whatsapp_links/entities/whatsapp_link.entity';
import { Job } from './jobs/entities/job.entity';
import { FinanceModule } from './finance/finance.module';
import { RulesModule } from './rules/rules.module';
import Rule from './rules/entities/rule.entity';
import { NewsModule } from './news/news.module';
import { JobsModule } from './jobs/jobs.module';
import OldBoard from './old_board/entity/old_board.entity';
import Finance from './finance/entities/finance.entity';
import Club from './clubs/entity/club.entity';
import DiscordLink from './discord_link/entity/discord_link.entity';
import News from './news/entity/news.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get('TYPEORM_HOST'),
      port: +configService.get('TYPEORM_PORT'),
      username: configService.get('TYPEORM_USERNAME'),
      password: configService.get('TYPEORM_PASSWORD'),
      database: configService.get('TYPEORM_DATABASE'),
      entities: [User, Setting, WhatsappLink, OldBoard, Finance, News, Job, Club, DiscordLink, Rule],
      synchronize: true,
    }),
    inject: [ConfigService],
    }),
    UsersModule,
    PassportModule,
    SettingModule,
    WhatsappLinksModule,
    JobsModule,
    OldBoardModule,
    FinanceModule,
    RulesModule,
    ClubModule,
    DiscordLinkModule,
    NewsModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes()
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
