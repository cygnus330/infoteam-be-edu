import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { boardData } from 'src/libs/data/boardData.service';
import { PrismaService } from 'src/libs/prisma.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService, boardData, PrismaService]
})
export class BoardModule {}
