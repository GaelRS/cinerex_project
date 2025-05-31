import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:{
      origin: "http://127.0.0.1:3000",
      credentials: true,
    }
  });

const config = new DocumentBuilder()
    .setTitle(' Cinerex Project')
    .setDescription('API para el proyecto Cinerex')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3000);

  }
bootstrap();
