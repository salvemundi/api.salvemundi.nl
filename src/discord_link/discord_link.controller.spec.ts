import { Test, TestingModule } from '@nestjs/testing';
import { DiscordLinkController } from './discord_link.controller';
import { DiscordLinkService } from './discord_link.service';

describe('DiscordLinkController', () => {
  let controller: DiscordLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscordLinkController],
      providers: [DiscordLinkService],
    }).compile();

    controller = module.get<DiscordLinkController>(DiscordLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
