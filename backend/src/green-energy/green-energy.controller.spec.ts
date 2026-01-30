import { Test, TestingModule } from '@nestjs/testing';
import { GreenEnergyController } from './green-energy.controller';

describe('GreenEnergyController', () => {
  let controller: GreenEnergyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreenEnergyController],
    }).compile();

    controller = module.get<GreenEnergyController>(GreenEnergyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
