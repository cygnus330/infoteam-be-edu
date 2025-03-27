import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async editPost(id: number, boardEditDto: boardDto) {

    }

    async genPost(boardPostDto: boardDto): Promise<number | null> {
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