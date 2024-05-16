import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configServices = app.get(ConfigService);
  const port = configServices.get<number>('PORT');
  await app.listen(port);
}
bootstrap();
