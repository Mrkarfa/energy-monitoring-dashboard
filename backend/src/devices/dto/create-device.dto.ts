import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateDeviceSchema = z.object({
  propertyId: z.string().uuid(),
  name: z.string(),
  type: z.string(), // lighting, refrigerator, etc.
  powerRatingWatts: z.number().optional(),
  isActive: z.boolean().optional(),
});

export class CreateDeviceDto extends createZodDto(CreateDeviceSchema) {}
