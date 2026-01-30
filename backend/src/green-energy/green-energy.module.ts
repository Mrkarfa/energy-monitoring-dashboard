import { Module } from '@nestjs/common';
import { GreenEnergyService } from './green-energy.service';
import { GreenEnergyController } from './green-energy.controller';

@Module({
  providers: [GreenEnergyService],
  controllers: [GreenEnergyController]
})
export class GreenEnergyModule {}
