import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsController } from './functions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunctionEntity } from './entities/function.entity';
@Module({
  imports: [TypeOrmModule.forFeature([FunctionEntity])], 
  controllers: [FunctionsController],
  providers: [FunctionsService],
})
export class FunctionsModule {}
