import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateGreenEnergySchema = z.object({
  propertyId: z.string().uuid(),
  type: z.string(), // solar, wind, battery
  name: z.string(),
  capacityKw: z.number().optional(),
  isActive: z.boolean().optional(),
});

export class CreateGreenEnergyDto extends createZodDto(
  CreateGreenEnergySchema,
) {}
