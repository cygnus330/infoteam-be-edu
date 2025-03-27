import { IsNumber, IsString } from "@nestjs/class-validator";


export class boardEditDto {
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

export class pidDto {
    @IsNumber()
    pid: number;
}

