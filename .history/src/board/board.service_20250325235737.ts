import { Body, Injectable } from '@nestjs/common';
import { boardPostDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(boardData: boardData) {}

    getBoard() {
        
    }

    async postBoard(boardPostDto: boardPostDto) {
        const pid = await boardData.genPost(boardPostDto);
    }
}
