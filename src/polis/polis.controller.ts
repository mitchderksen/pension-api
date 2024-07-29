import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { PolisService } from './polis.service';
import { PolisDTO } from './polis.dto';

@Controller('polis')
export class PolisController {
  constructor(private polisService: PolisService) {}

  @Get('/list')
  getPolisList(): PolisDTO[] {
    return this.polisService.getPolisList();
  }

  @Post('/add')
  addPolis(@Body() polisDto: PolisDTO): PolisDTO {
    return this.polisService.addPolis(polisDto);
  }

  @Delete('/remove')
  removePolis(@Query('id') id: number): void {
    return this.polisService.deletePolis(id);
  }
}
