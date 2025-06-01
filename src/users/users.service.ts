import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  registerUser(createUserDto: CreateUserDto) {
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async loginUser(userName: string, userPassword: string) {
    const user = await this.userRepository.findOne({ where: { userName } });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const match = await bcrypt.compare(userPassword, user.userPassword);
    if (!match) {
      throw new UnauthorizedException("Contraseña incorrecta");
    }
    const payload ={
      userName: user.userName,
      userPassword: user.userPassword,
      userRole: user.userRole,
    }
    const token = this.jwtService.sign(payload);
    return token;
  }
}
