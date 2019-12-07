import { IsInt, IsIn, Min, IsString, MinLength, MaxLength, IsISSN, IsDate } from 'class-validator';

export class Event {
    @IsInt()
    @Min(0)
    date: number;

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
}