import { Body, Injectable } from '@nestjs/common';
import { boardDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async getBoard(boardEditDto: boardDto) {
        
    }

    async postBoard(boardPostDto: boardDto) {
        const pid = await this.boardData.genPost(boardPostDto);
        return pid;
    }
}
