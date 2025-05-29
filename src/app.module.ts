import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomersModule } from "./customers/customers.module";
import { FunctionsModule } from "./functions/functions.module";
import { TheatersModule } from "./theaters/theaters.module";
import { ProjectionsModule } from "./projections/projections.module";
import { TicketsModule } from "./tickets/tickets.module";
import {ConfigModule} from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.host,
      port: +(process.env.port || 5432),
      username: "postgres",
      password: process.env.pass,
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CustomersModule,
    FunctionsModule,
    TheatersModule,
    ProjectionsModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
