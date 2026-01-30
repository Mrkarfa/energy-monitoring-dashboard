import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return (this.prisma as any).user.create({
      data: {
        email: createUserDto.email,
        passwordHash: hashedPassword,
        fullName: createUserDto.fullName,
      },
    });
  }

  async findOne(email: string) {
    return (this.prisma as any).user.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    return (this.prisma as any).user.findUnique({
      where: { id },
    });
  }
}
