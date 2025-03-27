import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { boardData } from 'src/libs/data/boardData.service';
import { boardEditDto, boardSearchDto } from './board.boardDto';

@Module({
  controllers: [BoardController],
  providers: [BoardService, boardData, boardSearchDto, boardEditDto]
})
export class BoardModule {}
