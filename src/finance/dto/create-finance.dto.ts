import { AutoMap } from '@automapper/classes';

export default class CreateFinanceDto {
  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly pdf_path: string;
}