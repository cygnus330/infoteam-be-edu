import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get(':id')
    getBoard(@Param('id') id: number, @Body() boardEditDto: boardDto) {
        return this.boardService.getBoard(id,);
    }

    @Post('')
    postBoard(@Body() boardPostDto: boardDto) {
        return this.boardService.postBoard(boardPostDto);
    }

    @Delete(':id')
    deleteBoard() {
        
    }

    @Put(':id')
    putBoard() {

    }
}

