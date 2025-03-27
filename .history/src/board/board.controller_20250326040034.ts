import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { boardEditDto, pidDto } from './board.boardDto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post('')
    async postBoard(@Body() boardPostDto: boardEditDto, @Res() res: Response): Promise<void> {
        try {
            const { pid }: pidDto = await this.boardService.postBoard(boardPostDto);
            return res.status(HttpStatus.OK).json({pid: pid});
        } catch(error) {
            
        }
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

