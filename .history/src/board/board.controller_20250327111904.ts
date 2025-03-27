import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto, boardSearchDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    async postBoard(@Body() boardPostDto: boardEditDto): Promise<any> {
        return await this.boardService.postBoard(boardPostDto);
    }

    @Get(':id')
    async getBoard(@Param('id') id: string): Promise<boardSearchDto> {
        const get = await this.boardService.getBoard(parseInt(id));
        return get;
    }

    @Put(':id')
    async putBoard(@Param('id') id: string, @Body() boardPutDto: boardEditDto): Promise<void> {
        await this.boardService.putBoard(parseInt(id), boardPutDto);
    }

    @Delete(':id')
    async deleteBoard(@Param('id') id: string, @Body() boardDeleteDto: boardEditDto): Promise<void> {
        await this.boardService.deleteBoard(parseInt(id), boardDeleteDto);
    }
}

