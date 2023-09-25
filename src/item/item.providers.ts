import { DataSource } from 'typeorm';
import { Item } from './item.entity';



export const itemProviders = [
  {
    provide: 'FILIAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Item),
    inject: ['DATA_SOURCE'],
  },
];