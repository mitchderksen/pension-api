import { BadRequestException, Injectable } from '@nestjs/common';
import { PolisDTO } from './polis.dto';

@Injectable()
export class PolisService {
  private polis: PolisDTO[] = [];
  getPolisList(): PolisDTO[] {
    return this.polis;
  }

  addPolis(polisDto: PolisDTO): PolisDTO {
    this.polis.push(polisDto);

    return polisDto;
  }

  deletePolis(policyNumber: number): void {
    const found = this.polis.findIndex(
      (polis: PolisDTO) => polis.policyNumber === policyNumber,
    );
    if (found === -1) {
      throw new BadRequestException(`Nothing found with id ${policyNumber}`);
    }
    this.polis.splice(found, 1);
  }
}
