import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { GreenEnergyService } from './green-energy.service';
import { CreateGreenEnergyDto } from './dto/create-green-energy.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('green-energy')
@UseGuards(JwtAuthGuard)
export class GreenEnergyController {
  constructor(private readonly greenEnergyService: GreenEnergyService) {}

  @Post()
  create(@Body() createGreenEnergyDto: CreateGreenEnergyDto) {
    return this.greenEnergyService.create(createGreenEnergyDto);
  }

  @Get()
  findAll(@Query('property_id') propertyId: string) {
    return this.greenEnergyService.findAll(propertyId);
  }
}
