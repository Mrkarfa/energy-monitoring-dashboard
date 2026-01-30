import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateRecommendationSchema = z.object({
  userId: z.string().uuid(),
  propertyId: z.string().uuid().optional(),
  type: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string().optional(),
  priority: z.string().optional(), // low, medium, high
  estimatedTimeMinutes: z.number().optional(),
});

export class CreateRecommendationDto extends createZodDto(
  CreateRecommendationSchema,
) {}
