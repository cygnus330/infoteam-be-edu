import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    postBoard(@Body() boardPostDto: boardEditDto, @Res() res: Response) {
        const pid = this.boardService.postBoard(boardPostDto);
        return res.text(String(pid));
    }

    @Get(':id')
    getBoard(@Param('id') id: number) {
        return this.boardService.getBoard(id);
    }

    @Put(':id')
    putBoard(@Param('id') id: number, @Body() boardPutDto: boardEditDto) {
        return this.boardService.putBoard(id, boardPutDto);
    }

    @Delete(':id')
    deleteBoard(@Param('id') id: number, @Body() boardDeleteDto: boardEditDto) {
        return this.boardService.deleteBoard(id, boardDeleteDto);
    }
}

