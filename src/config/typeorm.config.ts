import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  // entities: [__dirname + '/../**/*.entity.ts'],
  entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
  synchronize: dbConfig.synchronize,
};
