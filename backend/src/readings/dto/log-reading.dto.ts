import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LogReadingSchema = z.object({
  deviceId: z.string().uuid(),
  timestamp: z.string().datetime(), // ISO string
  energyKwh: z.number(),
  powerWatts: z.number().optional(),
  source: z.string().optional(),
});

export class LogReadingDto extends createZodDto(LogReadingSchema) {}
