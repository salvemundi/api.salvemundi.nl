import { AutoMap } from '@automapper/classes';

export default class UpdateSettingDto {
  @AutoMap()
  readonly description: string;

  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly board: string;

  @AutoMap()
  readonly img_path: string;
}
