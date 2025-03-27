import { Injectable } from '@nestjs/common';
import { boardEditDto, boardSearchDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async postBoard(boardPostDto: boardEditDto): Promise<number | null> {
        const pid = await this.boardData.createPost(boardPostDto);
        return pid;
    }

    async putBoard(id: number, boardEditDto: boardEditDto) {
        await this.boardData.updatePost(id, boardEditDto);
    }

    async deleteBoard(id: number, boardEditDto: boardEditDto) {

    }

    async getBoard(id: number): Promise<void> {
        await this.boardData.getPost(id);
    }
}
