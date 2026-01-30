import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { LogReadingDto } from './dto/log-reading.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('readings')
@UseGuards(JwtAuthGuard)
export class ReadingsController {
  constructor(private readonly readingsService: ReadingsService) {}

  @Post()
  logReading(@Body() logReadingDto: LogReadingDto) {
    return this.readingsService.logReading(logReadingDto);
  }

  @Get()
  getReadings(
    @Query('deviceId') deviceId: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.readingsService.getReadings(
      deviceId,
      new Date(from),
      new Date(to),
    );
  }
}
