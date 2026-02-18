import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();
  return app.getHttpAdapter().getInstance(); // This is the magic line for Vercel
}

// Export the promise for Vercel
export const handler = bootstrap();