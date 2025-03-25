import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardPostDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    static genPost(boardPostDto: boardPostDto) {
        throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService) {}

    async genPost(boardPostDto: boardPostDto): Promise<number | null> {
        return await this.prisma.post.create({
            data: {
                title: boardPostDto.title,
                text: boardPostDto.text,
                uid: boardPostDto.uid
            },
            select: {
                pid: true
            }
        })['pid'];
    }
}