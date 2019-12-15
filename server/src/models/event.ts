import { IsString, MinLength, MaxLength, IsDate, IsNotEmpty, IsArray, IsOptional, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';

export class Event {
    static collection = 'events';

    @IsMongoId()
    @IsOptional()
    _id: ObjectId;

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