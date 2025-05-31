import { Controller, Post, Param, Get, Body } from '@nestjs/common';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post('generate/:functionId')
  generate(@Param('functionId') functionId: string) {
    return this.seatsService.generateSeatsForFunction(functionId);
  }

  @Get(':functionId')
  getSeats(@Param('functionId') functionId: string) {
    return this.seatsService.getSeatsByFunction(functionId);
  }

  @Post('sell')
  sell(@Body() body: { functionId: string; row: string; seatNumber: number }) {
    return this.seatsService.sellSeat(body.functionId, body.row, body.seatNumber);
  }
} 