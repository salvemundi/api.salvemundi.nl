import { Test, TestingModule } from '@nestjs/testing';
import { OldBoardController } from './old_board.controller';

describe('OldBoardController', () => {
  let controller: OldBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OldBoardController],
    }).compile();

    controller = module.get<OldBoardController>(OldBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
