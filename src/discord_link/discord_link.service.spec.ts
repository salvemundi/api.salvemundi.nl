import { Test, TestingModule } from '@nestjs/testing';
import { DiscordLinkService } from './discord_link.service';

describe('DiscordLinkService', () => {
  let service: DiscordLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscordLinkService],
    }).compile();

    service = module.get<DiscordLinkService>(DiscordLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
