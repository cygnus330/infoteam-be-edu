import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto, pidDto } from './board.boardDto';
import { Response } from 'express';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    async postBoard(@Body() boardPostDto: boardEditDto, @Res() res: Response): Promise<void> {
        console.log(boardPostDto);
        try {
            const { pid }: pidDto = await this.boardService.postBoard(boardPostDto);
            res.status(HttpStatus.OK).json({pid: pid});
        } catch(error) {
            res.status(HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async getBoard(@Param('id') id: number, @Res() res: Response): Promise<void> {
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

