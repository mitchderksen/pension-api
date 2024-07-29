import { Module } from '@nestjs/common';
import { PolisController } from './polis.controller';
import { PolisService } from './polis.service';

@Module({
  controllers: [PolisController],
  providers: [PolisService],
})
export class PolisModule {}
