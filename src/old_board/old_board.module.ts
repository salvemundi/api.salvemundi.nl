import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OldBoardController } from './old_board.controller';
import { OldBoardService } from './old_board.service';
import OldBoard from './entity/old_board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OldBoard])],
  controllers: [OldBoardController],
  providers: [OldBoardService],
})
export class OldBoardModule {}
