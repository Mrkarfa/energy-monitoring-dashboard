import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGreenEnergyDto } from './dto/create-green-energy.dto';

@Injectable()
export class GreenEnergyService {
  constructor(private prisma: PrismaService) {}

  create(createGreenEnergyDto: CreateGreenEnergyDto) {
    return (this.prisma as any).greenEnergySource.create({
      data: createGreenEnergyDto,
    });
  }

  findAll(propertyId: string) {
    return (this.prisma as any).greenEnergySource.findMany({
      where: { propertyId },
    });
  }
}
