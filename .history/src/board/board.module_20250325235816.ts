import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { boardData } from 'src/libs/data/boardData.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService, boardData]
})
export class BoardModule {}
