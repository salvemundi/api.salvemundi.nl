import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import OldBoard from './entity/old_board.entity';

@Injectable()
export class OldBoardService {
  constructor(
    @InjectRepository(OldBoard)
    private oldBoardRepository: Repository<OldBoard>,
  ) {}

  public async create(oldBoard: OldBoard): Promise<OldBoard> {
    return await this.oldBoardRepository.save(oldBoard);
  }

  public async findAll(): Promise<OldBoard[]> {
    return await this.oldBoardRepository.find();
  }

  public async findOne(id: string): Promise<OldBoard> {
    const oldBoard = await this.oldBoardRepository.findOneBy({ id: id });
    if (oldBoard == null) {
      throw new NotFoundException('Board with id: ' + id + ' can not be found');
    }
    return oldBoard;
  }

  public async update(id: string, oldBoard: OldBoard): Promise<OldBoard> {
    await this.oldBoardRepository.update(id, oldBoard);

    return this.findOne(id);
  }

  public async remove(id: string) {
    await this.oldBoardRepository.delete(id);
  }
}
