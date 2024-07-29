import { Test, TestingModule } from '@nestjs/testing';
import { PolisService } from './polis.service';

describe('PolisService', () => {
  let service: PolisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolisService],
    }).compile();

    service = module.get<PolisService>(PolisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
