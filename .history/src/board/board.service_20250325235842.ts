import { Body, Injectable } from '@nestjs/common';
import { boardPostDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';

@Injectable()
export class BoardService {
    constructor(BoardData: boardData) {}

    getBoard() {
        
    }

    async postBoard(boardPostDto: boardPostDto) {
        const pid = await BoardData.genPost(boardPostDto);
    }
}
