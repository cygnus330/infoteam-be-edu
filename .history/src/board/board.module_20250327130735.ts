import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { PrismaService } from 'src/libs/prisma.service';
import { BoardRepository } from './board.repository';

@Module({
  controllers: [BoardController],
  providers: [BoardService, BoardRepository, PrismaService]
})
export class BoardModule {}
