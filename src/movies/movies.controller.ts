import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  UnauthorizedException,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import Multer from "multer";
import { UserData } from "src/users/decorators/user.decorator";
import { User } from "src/users/entities/user.entity";
import { Auth } from "src/users/decorators/auth.decorator";
import { ROLES } from "src/users/constants/role.constants";



@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  
  @Auth(ROLES.ADMIN)
  @Post()
  create(@UserData() user: User, @Body() createMovieDto: CreateMovieDto) {
    if (!user?.userRole?.includes("Admin")) {
      throw new UnauthorizedException(
        "No tienes permisos para crear una película"
      );
    }
    return this.moviesService.create(createMovieDto);
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("poster"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return "ok";
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", new ParseUUIDPipe({ version: "4" })) id: string,
    @Body() updateMovieDto: UpdateMovieDto
  ) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moviesService.remove(id);
  }
}
