import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstarp');

  const port = process.env.PORT || serverConfig.port;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
