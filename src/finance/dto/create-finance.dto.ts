import { AutoMap } from '@automapper/classes';

export default class CreateFinanceDto {
  @AutoMap()
  readonly description: string;

  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly board: string;

  @AutoMap()
  readonly pdf_path: string;
}