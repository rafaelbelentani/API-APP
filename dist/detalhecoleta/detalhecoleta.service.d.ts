import { Repository } from 'typeorm';
import { DetalheColeta } from './detalhecoleta.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { DetalheColetaCadastrarDto } from './dto/detalhecoleta.cadastrar.dto';
import { Coleta } from 'src/coleta/coleta.entity';
export declare class DetalheColetaService {
    private detalhecoletaRepository;
    constructor(detalhecoletaRepository: Repository<DetalheColeta>);
    cadastrar(data: DetalheColetaCadastrarDto, coleta: Coleta): Promise<ResultadoDto>;
}
