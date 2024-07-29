import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolisModule } from './polis/polis.module';

@Module({
  imports: [PolisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
