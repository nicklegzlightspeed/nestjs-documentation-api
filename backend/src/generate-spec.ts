import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function generateSpec() {
  // Bootstrap the app without listening for connections
  const app = await NestFactory.create(AppModule, { logger: false });
  app.setGlobalPrefix('api'); // Important if you have a global prefix

  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API documentation for the User Management service.')
    .setVersion('1.0')
    .addTag('Users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Write the OpenAPI spec to a file
  const outputPath = join(process.cwd(), 'openapi.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  console.log(`✅ OpenAPI specification generated at ${outputPath}`);

  // Close the app to exit the process
  await app.close();
}

generateSpec();
