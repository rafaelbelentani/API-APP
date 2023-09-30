import { DataSource } from 'typeorm';
import { DetalheColeta } from './detalhecoleta.entity';

export const detalhecoletaProviders = [
  {
    provide: 'DETALHECOLETA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DetalheColeta),
    inject: ['DATA_SOURCE'],
  },
  
];