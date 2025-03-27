import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { boardEditDto, boardSearchDto } from 'src/board/board.boardDto';

@Injectable()
export class boardData {
    constructor(private prisma: PrismaService) {}

    async isPostExist(pid: number): Promise<boolean> {
        const read = await this.prisma.post.findUnique({
            where: {
                pid: pid
            }
        });
        const isExist = !!(read);

        return isExist;
    }

    async isUserExist(uid: number): Promise<boolean> {
        const read = await this.prisma.user.findUnique({
            where: {
                uid: uid
            }
        });
        const isExist = !!(read);

        return isExist;
    }

    async getPostUid(pid: number): Promise<number> {
        const read = await this.prisma.post.findUnique({
            where: {
                pid: pid
            }
        });

        return read?.uid || -1;
    }

    async getPost(pid: number): Promise<boardSearchDto> {
        const read = await this.prisma.post.findUnique({
            where: {
                pid: pid
            }
        });
        const data: any = {
            title: read?.title || "",
            text: read?.text || ""
        };

        const uid = read?.uid;
        if(uid !== undefined) {
            const uname: string = await this.prisma.user.findUnique({
                where: {
                    uid: uid
                }
            })['name'];
            data.uname = uname;
        }

        return data;
    }

    async updatePost(id: number, boardEditDto: boardEditDto): Promise<void> {
        const data: any = {};
        if(boardEditDto.text != undefined) data.text = boardEditDto.text;
        if(boardEditDto.title != undefined) data.title = boardEditDto.title;

        const update = await this.prisma.post.update({
            where: {
                pid: id
            },
            data: data
        });
    }

    async insertPost(boardPostDto: boardEditDto): Promise<boardEditDto> {
        const create = await this.prisma.post.create({
            data: {
                title: boardPostDto?.title || "",
                text: boardPostDto?.text || "",
                user: {
                    connect: {uid: boardPostDto.uid}
                }
            },
            select: {
                pid: true
            }
        });
        return create;
    }

    async deletePost(id: number): Promise<void> {
        await this.prisma.post.delete({
            where: {
                pid: id
            }
        });
    }
}