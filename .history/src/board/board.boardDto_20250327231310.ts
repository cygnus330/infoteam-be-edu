import { IsNumber, IsString } from "class-validator";

export class BoardEditDto {
    @IsString()
    title?: string;
    @IsString()
    text?: string;

    @IsNumber()
    uid: number;
}

export class boardSearchDto {
    @IsString()
    title: string;
    @IsString()
    text: string;

    @IsString()
    uname: number;
}