import { Body, Injectable } from '@nestjs/common';
import { boardPostDto } from './board.boardDto';

import { boardData } from 'src/libs/data/boardData.service';

@Injectable()
export class BoardService {
    getBoard() {
        
    }

    async postBoard(boardPostDto: boardPostDto) {
        
    }
}
