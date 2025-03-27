import { isString } from "class-validator";

export class boardEditDto {
    @isString()
    title?: string;
    text?: string;

    uid: number;
}

export class boardSearchDto {
    title: string;
    text: string;

    uname: number;
}
