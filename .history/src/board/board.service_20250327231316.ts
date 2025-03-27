import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { BoardEditDto, BoardSearchDto } from './board.boardDto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
    constructor(private boardData: BoardRepository) {}

    async postBoard(boardPostDto: BoardEditDto): Promise<any> {
        if(boardPostDto.uid == undefined) throw new ForbiddenException();

        const pid: number = await this.boardData.insertPost(boardPostDto);
        return pid;
    }

    async getBoard(id): Promise<BoardSearchDto> {
        id = parseInt(id);
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            throw new BadRequestException();
        }

        const get: BoardSearchDto = await this.boardData.getPost(id);
        return {
            title: get.title,
            text: get.text,
            uname: get.uname
        };
    }

    async putBoard(id: number, boardEditDto: BoardEditDto): Promise<void> {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            throw new BadRequestException();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            throw new ForbiddenException();
        }

        await this.boardData.updatePost(id, boardEditDto);
    }

    async deleteBoard(id: number, boardEditDto: BoardEditDto): Promise<void> {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            throw new BadRequestException();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            throw new ForbiddenException();
        }

        await this.boardData.deletePost(id);
    }
}
