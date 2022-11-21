import { AutoMap } from '@automapper/classes';

export default class UpdateFinanceDto {
  @AutoMap()
  readonly year: number;

  @AutoMap()
  readonly pdf_path: string;
}
