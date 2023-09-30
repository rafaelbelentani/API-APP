import { Coleta } from 'src/coleta/coleta.entity';
export declare class Usuario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    filial: string;
    gestor: string;
    telefone_gestor: string;
    cliente: string;
    cnpj: string;
    contrato: string;
    senha: string;
    coleta: Coleta[];
}
