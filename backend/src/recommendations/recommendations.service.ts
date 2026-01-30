import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

@Injectable()
export class RecommendationsService {
  constructor(private prisma: PrismaService) {}

  create(createRecommendationDto: CreateRecommendationDto) {
    return (this.prisma as any).recommendation.create({
      data: createRecommendationDto,
    });
  }

  findAll(userId: string) {
    return (this.prisma as any).recommendation.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  markAsRead(id: string) {
    return (this.prisma as any).recommendation.update({
      where: { id },
      data: { isRead: true },
    });
  }
}
