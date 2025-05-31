import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  userName: string;

  @IsString()
  @MinLength(8)
  userPassword: string;
}