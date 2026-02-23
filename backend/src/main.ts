import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Make sure this path is correct!
import { prototype } from 'events';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = 3000;

  await app.init();
  await app.listen(port, '0.0.0.0')
  return app.getHttpAdapter().getInstance();
}

export default bootstrap();