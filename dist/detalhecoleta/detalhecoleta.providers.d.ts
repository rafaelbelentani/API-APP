import { DataSource } from 'typeorm';
import { DetalheColeta } from './detalhecoleta.entity';
export declare const detalhecoletaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<DetalheColeta>;
    inject: string[];
}[];
