import {IsArray, IsInt, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";


export class CreateMovieDto {
  @IsUUID("4")
  @IsOptional()
  movieId: string;

  @IsString()
  @MaxLength(40)
  title: string;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsInt()
  duration: number;

  @IsString()
  rating: string;

  @IsOptional()
  poster: string;

  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  functions?: string[]; 
}
