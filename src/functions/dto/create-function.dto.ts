import { FunctionEntity } from "../entities/function.entity";
import { IsUUID, IsDateString } from 'class-validator';

export class CreateFunctionDto {
  @IsUUID()
  movieId: string;

  @IsUUID()
  theaterId: string;

  @IsDateString()
  datetime: string;

  // Creo falta declarar los tipos de las relaciones
}

