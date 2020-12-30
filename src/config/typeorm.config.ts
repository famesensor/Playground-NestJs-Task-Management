import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'taskmanager',
  // entities: [__dirname + '/../**/*.entity.ts'],
  entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
  synchronize: true,
};
