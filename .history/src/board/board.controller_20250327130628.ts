import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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
    async getBoard(@Param('id') id: number): Promise<boardSearchDto> {
        const get = await this.boardService.getBoard(id);
        return get;
    }

    @Put(':id')
    async putBoard(@Param('id') id: number, @Body() boardPutDto: boardEditDto): Promise<void> {
        await this.boardService.putBoard(id, boardPutDto);
    }

    @Delete(':id')
    async deleteBoard(@Param('id') id: number, @Body() boardDeleteDto: boardEditDto): Promise<void> {
        await this.boardService.deleteBoard(id, boardDeleteDto);
    }
}