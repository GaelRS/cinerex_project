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
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user-dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signup")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  signup(@Body() createUserDto: CreateUserDto) {
    console.log("Received signup request with data:", createUserDto);
    return this.usersService.registerUser(createUserDto);
  }

  @Post("login")
  @UsePipes(new ValidationPipe({ whitelist: true }))
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.loginUser(
      loginUserDto.userName,
      loginUserDto.userPassword
    );
  }
}
