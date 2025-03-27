import { IsNumber, IsPositive, IsString } from "class-validator";

export class boardEditDto {
    @IsString()
    title?: string;
    @IsString()
    text?: string;

    @IsNumber()
    @IsPositive()
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

export class idDto {
    @IsNumber()
    id: number;
}