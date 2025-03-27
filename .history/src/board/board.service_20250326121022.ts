import { Injectable } from '@nestjs/common';
import { boardEditDto, boardSearchDto, pidDto } from './board.boardDto';

import { boardData } from '../libs/data/boardData.service';
import { Response, response } from 'express';

@Injectable()
export class BoardService {
    constructor(private boardData: boardData) {}

    async postBoard(boardPostDto: boardEditDto): Promise<any> {
        if(boardPostDto.uid == undefined) return response.status(400).send();
        boardPostDto.text = boardPostDto.text || "";
        boardPostDto.title = boardPostDto.title || "";

        const pid: pidDto = await this.boardData.insertPost(boardPostDto);
        return pid;
    }

    async getBoard(id: number): Promise<Response> {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }

        const get: boardSearchDto = await this.boardData.getPost(id);
        return response.json({
            title: get.title,
            text: get.text,
            uname: get.uname
        }).status(200).send();
    }

    async putBoard(id: number, boardEditDto: boardEditDto): Promise<Response> {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            return response.status(403).send();
        }

        await this.boardData.updatePost(id, boardEditDto);
        return response.status(200).send();
    }

    async deleteBoard(id: number, boardEditDto: boardEditDto) {
        const isExist = await this.boardData.isPostExist(id);
        if(!isExist) {
            return response.status(400).send();
        }

        const post_uid = await this.boardData.getPostUid(id);
        if(post_uid !== boardEditDto.uid) {
            return response.status(403).send();
        }

        await this.boardData.deletePost(id);
        return response.status(200).send();
    }
}
