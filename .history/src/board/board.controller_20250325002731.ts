import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardPostDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard() {
        return this.boardService.getBoard();
    }

    @Post('')
    postBoard(@Body() boardPostDto: boardPostDto) {

    }

    @Delete(':id')
    deleteBoard() {
        
    }

    @Put(':id')
    putBoard() {

    }
}

