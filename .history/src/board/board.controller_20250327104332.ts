import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto, pidDto } from './board.boardDto';
import { Response } from 'express';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    async postBoard(@Body() boardPostDto: boardEditDto): Promise<pidDto> {
        return await this.boardService.postBoard(boardPostDto);
    }

    @Get(':id')
    async getBoard(@Param('id') id: number) {
        await this.boardService.getBoard(id);
    }

    @Put(':id')
    async putBoard(@Param('id') id: number, @Body() boardPutDto: boardEditDto, @Res() res: Response): Promise<void> {
        await this.boardService.putBoard(id, boardPutDto);
    }

    @Delete(':id')
    async deleteBoard(@Param('id') id: number, @Body() boardDeleteDto: boardEditDto, @Res() res: Response): Promise<void> {
        await this.boardService.deleteBoard(id, boardDeleteDto);
    }
}

