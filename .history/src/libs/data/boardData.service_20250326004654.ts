import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardEditDto, boardSearchDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async getPost(pid: number): Promise<boardSearchDto> {
        const read = await this.prisma.post.findUnique({
            where: {
                pid: pid
            }
        });

        return {
            title: read?.title || "",
            text: read?.text || ""
        };
    }

    async updatePost(id: number, boardEditDto: boardEditDto): Promise<void> {
        const update = await this.prisma.post.update({
            where: {
                pid: id
            },
            data: {
                
            }
        });
    }

    async createPost(boardPostDto: boardEditDto): Promise<number | null> {
        const create = await this.prisma.post.create({
            data: {
                title: boardPostDto?.title || "",
                text: boardPostDto?.text || "",
                uid: boardPostDto.uid
            },
            select: {
                pid: true
            }
        });

        return create['pid'];
    }
}