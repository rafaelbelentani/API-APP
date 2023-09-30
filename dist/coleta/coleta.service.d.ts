import { Repository } from 'typeorm';
import { Coleta } from './coleta.entity';
import { ColetaCadastrarDto } from './dto/coleta.cadastrar.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
export declare class ColetaService {
    private coletaRepository;
    constructor(coletaRepository: Repository<Coleta>);
    cadastrar(data: ColetaCadastrarDto, usuario: Usuario): Promise<ResultadoDto>;
}
