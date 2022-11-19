import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import User from './users/entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { SettingModule } from './setting/setting.module';
import { ClubModule } from './clubs/club.module';
import Setting from './setting/entity/setting.entity';
import Club from './clubs/entity/club.entity';

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
      entities: [User, Setting, Club],
      synchronize: true,
    }),
    inject: [ConfigService],
    }),
    UsersModule,
    PassportModule,
    SettingModule,
    ClubModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
