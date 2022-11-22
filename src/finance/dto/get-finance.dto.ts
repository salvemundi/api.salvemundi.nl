import { AutoMap } from '@automapper/classes';

export default class GetFinanceDto {
  @AutoMap()
  readonly id: string;

  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly pdf_path: string;

  @AutoMap()
  readonly created_at: Date;

  @AutoMap()
  readonly updated_at: Date;
}