import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardPostDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async genPost(boardPostDto: boardPostDto) {
        return this.prisma.post.create({
            data: {
                title: boardPostDto.title,
                text: boardPostDto.text,
                uid: boardPostDto.uid
            }
        }).pid;
    }
}