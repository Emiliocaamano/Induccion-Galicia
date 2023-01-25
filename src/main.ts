import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( new ValidationPipe({
    validatorPackage: require('class-validator'),
    transformerPackage: require('class-transformer'),
    whitelist: true,
    transform: true, 
    forbidNonWhitelisted: true, 
    forbidUnknownValues: true, 
    transformOptions:{
      enableImplicitConversion: true
    }
  }
  ))
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
    allowedHeaders:'Authorization',
    credentials: true,
  })

  const config = new DocumentBuilder()
    .setTitle('Inducción')
    .setDescription('¡Inducción a Galcia!')
    .setVersion("1.0.0")
    .addTag('Galicia')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'authorization',
        description: 'Enter JWT token',
        in: 'haeder'
      },
      'access-token'
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  


  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
