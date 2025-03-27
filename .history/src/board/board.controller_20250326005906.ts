import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    postBoard(@Body() boardPostDto: boardEditDto) {
        return this.boardService.postBoard(boardPostDto);
    }

    @Get(':id')
    getBoard(@Param('id') id: number) {
        return this.boardService.getBoard(id);
    }

    @Put(':id')
    putBoard() {

    }

    @Delete(':id')
    deleteBoard() {
        
    }
}

