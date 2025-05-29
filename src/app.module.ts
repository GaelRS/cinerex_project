import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { FunctionsModule } from './functions/functions.module';
import { TheatersModule } from './theaters/theaters.module';
import { ProjectionsModule } from './projections/projections.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [CustomersModule, FunctionsModule, TheatersModule, ProjectionsModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
