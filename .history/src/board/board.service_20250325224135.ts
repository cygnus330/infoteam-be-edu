import { Body, Injectable } from '@nestjs/common';
import { boardPostDto } from './board.boardDto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function post(boardPostDto: boardPostDto) {
    
}

@Injectable()
export class BoardService {
    getBoard() {
        
    }

    async postBoard(boardPostDto: boardPostDto) {
        
    }
}
