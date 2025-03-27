import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard(@Param('id') id: number) {
        return this.boardService.getBoard(id);
    }

    @Post('')
    postBoard(@Body() boardPostDto: boardEditDto) {
        return this.boardService.postBoard(boardPostDto);
    }

    @Delete(':id')
    deleteBoard() {
        
    }

    @Put(':id')
    putBoard() {

    }
}

