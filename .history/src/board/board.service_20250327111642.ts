import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { boardEditDto, boardSearchDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';
import { Response, response } from 'express';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async postBoard(boardPostDto: boardEditDto): Promise<any> {
        if(boardPostDto.uid == undefined) throw new ForbiddenException();

        const pid: number = await this.boardData.insertPost(boardPostDto);
        return pid;
    }

    async getBoard(id): Promise<boardSearchDto> {
        id = parseInt(id);
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            throw new BadRequestException();
        }

        const get: boardSearchDto = await this.boardData.getPost(id);
        return {
            title: get.title,
            text: get.text,
            uname: get.uname
        };
    }

    async putBoard(id: number, boardEditDto: boardEditDto): Promise<void> {
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

    async deleteBoard(id: number, boardEditDto: boardEditDto) {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            return response.status(403).send();
        }

        await this.boardData.deletePost(id);
        return response.status(200).send();
    }
}
