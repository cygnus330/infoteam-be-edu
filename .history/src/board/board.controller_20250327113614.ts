import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto, boardSearchDto, idDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    async postBoard(@Body() boardPostDto: boardEditDto): Promise<any> {
        return await this.boardService.postBoard(boardPostDto);
    }

    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getBoard(@Param() idDto: idDto): Promise<boardSearchDto> {
        const get = await this.boardService.getBoard(idDto.id);
        return get;
    }

    @Put(':id')
    async putBoard(@Param() idDto: idDto, @Body() boardPutDto: boardEditDto): Promise<void> {
        await this.boardService.putBoard(idDto.id, boardPutDto);
    }

    @Delete(':id')
    async deleteBoard(@Param() idDto: idDto, @Body() boardDeleteDto: boardEditDto): Promise<void> {
        await this.boardService.deleteBoard(idDto.id, boardDeleteDto);
    }
}