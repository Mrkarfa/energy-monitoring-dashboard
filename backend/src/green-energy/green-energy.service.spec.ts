import { Test, TestingModule } from '@nestjs/testing';
import { GreenEnergyService } from './green-energy.service';

describe('GreenEnergyService', () => {
  let service: GreenEnergyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreenEnergyService],
    }).compile();

    service = module.get<GreenEnergyService>(GreenEnergyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
