import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LogReadingDto } from './dto/log-reading.dto';

@Injectable()
export class ReadingsService {
  constructor(private prisma: PrismaService) {}

  logReading(logReadingDto: LogReadingDto) {
    return (this.prisma as any).energyReading.create({
      data: {
        deviceId: logReadingDto.deviceId,
        timestamp: new Date(logReadingDto.timestamp),
        energyKwh: logReadingDto.energyKwh,
        powerWatts: logReadingDto.powerWatts,
        source: logReadingDto.source,
      },
    });
  }

  getReadings(deviceId: string, from: Date, to: Date) {
    return (this.prisma as any).energyReading.findMany({
      where: {
        deviceId,
        timestamp: {
          gte: from,
          lte: to,
        },
      },
      orderBy: { timestamp: 'asc' },
    });
  }
}
