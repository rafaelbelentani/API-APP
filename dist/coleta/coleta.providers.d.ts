import { DataSource } from 'typeorm';
import { Coleta } from './coleta.entity';
export declare const coletaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Coleta>;
    inject: string[];
}[];
