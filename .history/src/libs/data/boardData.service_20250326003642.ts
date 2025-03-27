import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async updatePost(id: number, boardEditDto: boardDto): Promise<void> {

    }

    async createPost(boardPostDto: boardDto): Promise<number | null> {
        const create = await this.prisma.post.create({
            data: {
                title: boardPostDto.title,
                text: boardPostDto.text,
                uid: boardPostDto.uid
            },
            select: {
                pid: true
            }
        });
        return create['pid'];
    }
}