import { Injectable } from '@nestjs/common';

@Injectable()
export class boardEditDto {
    title?: string;
    text?: string;

    uid: number;
}

@Injectable()
export class boardSearchDto {
    title: string;
    text: string;

    uname: number;
}