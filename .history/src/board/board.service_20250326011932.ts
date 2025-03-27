import { HttpStatus, Injectable } from '@nestjs/common';
import { boardEditDto, boardSearchDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';
import { Response, response } from 'express';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async postBoard(boardPostDto: boardEditDto): Promise<Response> {
        const pid = await this.boardData.insertPost(boardPostDto);
        return response.json({
            pid: pid
        }).status(200).send();
    }

    async getBoard(id: number): Promise<Response> {
        await this.boardData.getPost(id);
    }

    async putBoard(id: number, boardEditDto: boardEditDto): Promise<Response> {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            return response.status(403).send();
        }

        await this.boardData.updatePost(id, boardEditDto);
        return response.status(200).send();
    }

    async deleteBoard(id: number, boardEditDto: boardEditDto) {

    }
}
