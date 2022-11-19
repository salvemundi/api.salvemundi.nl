import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappLinksController } from './whatsapp_links.controller';
import { WhatsappLinksService } from './whatsapp_links.service';

describe('WhatsappLinksController', () => {
  let controller: WhatsappLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhatsappLinksController],
      providers: [WhatsappLinksService],
    }).compile();

    controller = module.get<WhatsappLinksController>(WhatsappLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
