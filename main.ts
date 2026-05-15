import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  process.env.TZ = '-03:00';

  
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  // --- CONFIGURAÇÃO DO SWAGGER  ---
  const config = new DocumentBuilder()
    .setTitle('Farmácia Digital')
    .setDescription('Projeto CRUD Farmácia - Bloco 03')
    .setContact("Wadssa Wacemberg", "https://github.com/WadssaWacemberg", "seuemail@email.com")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
 
  await app.listen(process.env.PORT || 4000);
}
bootstrap();