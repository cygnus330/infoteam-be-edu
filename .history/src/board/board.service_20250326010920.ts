import { Injectable } from '@nestjs/common';
import { boardEditDto, boardSearchDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';
import { response } from 'express';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async postBoard(boardPostDto: boardEditDto): Promise<number | null> {
        const pid = await this.boardData.insertPost(boardPostDto);
        return pid;
    }

    async getBoard(id: number): Promise<void> {
        await this.boardData.getPost(id);
    }

    async putBoard(id: number, boardEditDto: boardEditDto) {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }
        const post_cid = await this.boardData.getPostUid(id);
        if(post_cid === -1) {
            return response.status(403).send();
        }
        await this.boardData.updatePost(id, boardEditDto);
    }

    async deleteBoard(id: number, boardEditDto: boardEditDto) {

    }
}
