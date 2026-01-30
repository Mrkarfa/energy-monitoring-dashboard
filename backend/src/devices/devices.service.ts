import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) {}

  create(createDeviceDto: CreateDeviceDto) {
    return (this.prisma as any).device.create({
      data: createDeviceDto,
    });
  }

  findAll(propertyId: string) {
    return (this.prisma as any).device.findMany({
      where: { propertyId },
    });
  }
}
