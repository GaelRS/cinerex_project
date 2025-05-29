import { Module } from '@nestjs/common';
import { ProjectionsService } from './projections.service';
import { ProjectionsController } from './projections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projection } from './entities/projection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Projection])],
  controllers: [ProjectionsController],
  providers: [ProjectionsService],
})
export class ProjectionsModule {}
