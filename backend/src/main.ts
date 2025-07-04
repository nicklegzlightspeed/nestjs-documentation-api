import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import redoc from 'redoc-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Create the OpenAPI document configuration
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('A simple API for managing users, built with NestJS.')
    .setVersion('1.0')
    .addTag('Users', 'Operations related to users')
    .build();

  // 2. Generate the OpenAPI document object from the app and config
  const document = SwaggerModule.createDocument(app, config);

  // 3. Set up SwaggerModule to serve the JSON spec
  // This is the standard NestJS way to create the /api-docs-json endpoint
  SwaggerModule.setup('/api', app, document);

  // 4. Set up Redoc
  const redocOptions = {
    title: 'API Docs',
    specUrl: '/api-json', // This URL is created by SwaggerModule.setup()
  };

  // Serve the Redoc UI at the /docs route
  app.use('/docs', redoc(redocOptions));

  await app.listen(3000);
  console.log(`🚀 Application is running on: http://localhost:3000`);
  console.log(`📖 API docs available at: http://localhost:3000/docs`);
}
bootstrap();
