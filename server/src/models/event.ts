import { IsString, MinLength, MaxLength, IsDate, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class Event {
    static collection = 'events';

    @IsDate()
    date: Date;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    place: string;

    @IsString()
    @MinLength(10)
    @MaxLength(1000)
    description: string;

    @IsDate()
    createDate: Date;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsOptional()
    @IsArray()
    images: string[];
}