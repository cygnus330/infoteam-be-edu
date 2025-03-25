import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    function getBoard() {
        return this.boardService.getBoard();
    }

    @Post('')
    function postBoard() {

    }

    @Delete(':id')
    function deleteBoard() {
        
    }
}

