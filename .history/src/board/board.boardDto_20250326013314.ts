import { Injectable } from '@nestjs/common';

@Injectable()
export class boardEditDto {
    title?: string;
    text?: string;

    uid: number;
}

export class boardSearchDto {
    title: string;
    text: string;

    uname: number;
}