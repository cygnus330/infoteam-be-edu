import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardPostDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async genPost(boardPostDto: boardPostDto): Promise<number | null> {
        return this.prisma.user.
    }
}