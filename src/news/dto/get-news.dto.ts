import { AutoMap } from '@automapper/classes';

export default class GetNewsDto {
  @AutoMap()
  readonly id: string;

  @AutoMap()
  public title: string;

  @AutoMap()
  public description: string;

  @AutoMap()
  public img_path: string;

  @AutoMap()
  public created_at: Date;

  @AutoMap()
  public updated_at: Date;
}
