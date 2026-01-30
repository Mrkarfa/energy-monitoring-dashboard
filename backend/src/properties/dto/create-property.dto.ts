import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreatePropertySchema = z.object({
  name: z.string(),
  type: z.string(),
  address: z.string().optional(),
  isPrimary: z.boolean().optional(),
});

export class CreatePropertyDto extends createZodDto(CreatePropertySchema) {}
