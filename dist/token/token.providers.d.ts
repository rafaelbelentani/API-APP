import { DataSource } from 'typeorm';
import { Token } from './token.entity';
export declare const tokenProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Token>;
    inject: string[];
}[];
