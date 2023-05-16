import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  try {
    const config = new DocumentBuilder()
      .setTitle('avtoelon')
      .setDescription('avtoelon project')
      .setVersion('1.0.0')
      .addTag('Nodejs, NestJs, Postgres, Sequelize, Jwt')
      .build();
    const PORT = process.env.PORT || 3333;
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => {
      console.log(`Server started on ${PORT} - port`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
