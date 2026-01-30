import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, createPropertyDto: CreatePropertyDto) {
    return (this.prisma as any).property.create({
      data: {
        ...createPropertyDto,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return (this.prisma as any).property.findMany({
      where: { userId },
    });
  }

  findOne(id: string) {
    return (this.prisma as any).property.findUnique({
      where: { id },
      include: { devices: true },
    });
  }
}
