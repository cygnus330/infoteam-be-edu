import { Body, Injectable } from '@nestjs/common';
import { boardEditDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async getBoard(id: number, boardEditDto: boardEditDto): Promise<void> {
        await this.boardData.updatePost(id, boardEditDto);
    }

    async postBoard(boardPostDto: boardEditDto): Promise<number | null> {
        const pid = await this.boardData.createPost(boardPostDto);
        return pid;
    }
}
