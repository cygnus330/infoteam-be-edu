import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardPostDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard(@Param('id') id: number) {
        return this.boardService.getBoard();
    }

    @Post('')
    postBoard(@Body() boardPostDto: boardPostDto) {
        return this.boardService.postBoard(boardPostDto);
    }

    @Delete(':id')
    deleteBoard() {
        
    }

    @Put(':id')
    putBoard() {

    }
}

