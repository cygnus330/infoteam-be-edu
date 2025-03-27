import { Body, Injectable } from '@nestjs/common';
import { boardDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async getBoard(id: number, boardEditDto: boardDto): Promise<void> {
        await this.boardData.editPost
    }

    async postBoard(boardPostDto: boardDto): Promise<number | null> {
        const pid = await this.boardData.genPost(boardPostDto);
        return pid;
    }
}
