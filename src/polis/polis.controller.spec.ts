import { Test, TestingModule } from '@nestjs/testing';
import { PolisController } from './polis.controller';

describe('PolisController', () => {
  let controller: PolisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolisController],
    }).compile();

    controller = module.get<PolisController>(PolisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
