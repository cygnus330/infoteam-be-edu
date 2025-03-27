import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardRepository } from './board.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository]
})
export class BoardModule {}