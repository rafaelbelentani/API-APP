import { DataSource } from 'typeorm';
import { Coleta } from './coleta.entity';

export const coletaProviders = [
  {
    provide: 'COLETA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Coleta),
    inject: ['DATA_SOURCE'],
  },
  
];