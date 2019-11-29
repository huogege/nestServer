import { createConnection } from 'typeorm';
import {Photo} from '../photo/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: [
        Photo,
      ],
      synchronize: true,
    })
  },
];
