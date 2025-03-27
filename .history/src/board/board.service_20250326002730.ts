import { Body, Injectable } from '@nestjs/common';
import { boardPostDto, boardEditDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async getBoard(boardEditDto: boardEditDto) {
        
    }

    async postBoard(boardPostDto: boardPostDto) {
        const pid = await this.boardData.genPost(boardPostDto);
        return pid;
    }
}
