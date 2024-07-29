import { StatusEnum } from './polis.status.enum';

export class PolisDTO {
  policyNumber: number;
  name: string;
  age: number;
  status: StatusEnum;
}
