import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { SeatsModule } from 'src/seats/seats.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), SeatsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
