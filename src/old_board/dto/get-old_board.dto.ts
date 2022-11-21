import { AutoMap } from '@automapper/classes';

export default class UpdateOldBoardDto {
  @AutoMap()
  readonly id: string;

  @AutoMap()
  readonly description: string;

  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly board: string;

  @AutoMap()
  readonly img_path: string;

  @AutoMap()
  readonly created_at: Date;

  @AutoMap()
  readonly updated_at: Date;
}
