import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Make sure this path is correct!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default bootstrap();