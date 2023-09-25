import { DataSource} from 'typeorm';
import { Token } from './token.entity';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';



export const tokenProviders = [
  {
    provide: 'TOKEN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Token),
    inject: ['DATA_SOURCE'],
  },
];