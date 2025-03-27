import { IsNumber, IsString } from "class-validator";

export class BoardEditDto {
    @IsString()
    title?: string;
    @IsString()
    text?: string;

    @IsNumber()
    uid: number;
}

export class BoardSearchDto {
    @IsString()
    title: string;
    @IsString()
    text: string;

    @IsString()
    uname: number;
}