import { DetalheColeta } from 'src/detalhecoleta/detalhecoleta.entity';
import { Usuario } from 'src/usuario/usuario.entity';
export declare class Coleta {
    id: number;
    usuario: Usuario;
    cliente: Usuario;
    filial: Usuario;
    pedido: String;
    data_hora: String;
    detalhecoleta: DetalheColeta[];
}
