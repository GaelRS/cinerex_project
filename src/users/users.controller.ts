import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user-dto";
import { TOKEN_NAME } from "./constants/jwt.constants";
import { Response } from "express";
import { Cookies } from "./decorators/cookies.decorator";

@Controller("auth")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signup")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async signup(@Body() createUserDto: CreateUserDto, @Res({passthrough: true}) response: Response, @Cookies() cookies: any) {
    const token = await this.usersService.registerUser(createUserDto);
    response.cookie(TOKEN_NAME, token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return;
  }

  @Post("login")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async login(@Body() loginUserDto: LoginUserDto, @Res({passthrough: true}) response: Response, @Cookies() cookies: any) {
    const token = await this.usersService.loginUser(loginUserDto.userName,loginUserDto.userPassword,);
    response.cookie(TOKEN_NAME, token,{
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    return;
  }
}
