import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard() {
        return this.boardService.getBoard();
    }

    @Post('')
    postBoard() {

    }

    @Delete(':id')
    deleteBoard() {
        
    }
}

