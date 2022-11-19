import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappLinksService } from './whatsapp_links.service';

describe('WhatsappLinksService', () => {
  let service: WhatsappLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappLinksService],
    }).compile();

    service = module.get<WhatsappLinksService>(WhatsappLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
