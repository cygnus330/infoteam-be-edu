import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardPostDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard(@Param('id') id: number, @Body() boardEditDto: boardPostDto) {
        return this.boardService.getBoard(id, boardEditDto);
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

