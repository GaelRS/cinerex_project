import {IsArray, IsEmail, IsIn, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateUserDto  {
  @IsUUID("4")
  @IsOptional()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  @MaxLength(20)
  userName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  @MinLength(8) 
  userPassword: string;

  @IsArray()
  @IsIn(['Admin','Customer'], { each: true })
  userRole: string[];
}
