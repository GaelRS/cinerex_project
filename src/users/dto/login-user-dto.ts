import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  userName: string;

  @IsString()
  @MinLength(8)
  userPassword: string;
}