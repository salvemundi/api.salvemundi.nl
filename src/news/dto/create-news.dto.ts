import { AutoMap } from '@automapper/classes';

export default class CreateNewsDto {
  @AutoMap()
  public title: string;

  @AutoMap()
  public description: string;

  @AutoMap()
  public img_path: string;
}
