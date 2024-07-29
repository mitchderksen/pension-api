import { IsEnum, IsNotEmpty } from 'class-validator';
import { StatusEnum } from './polis.status.enum';

export class PolisDTO {
  @IsNotEmpty()
  policyNumber: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
