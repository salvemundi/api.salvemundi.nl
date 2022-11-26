import { Test, TestingModule } from '@nestjs/testing';
import { OldBoardService } from './old_board.service';

describe('OldBoardService', () => {
  let service: OldBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OldBoardService],
    }).compile();

    service = module.get<OldBoardService>(OldBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
