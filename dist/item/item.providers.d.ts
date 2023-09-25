import { DataSource } from 'typeorm';
import { Item } from './item.entity';
export declare const itemProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Item>;
    inject: string[];
}[];
