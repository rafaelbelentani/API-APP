import { ResultadoDto } from 'src/dto/resultado.dto';
import { ColetaService } from './coleta.service';
import { ColetaCadastrarDto } from './dto/coleta.cadastrar.dto';
import { TokenService } from 'src/token/token.service';
export declare class ColetaController {
    private readonly coletaService;
    private readonly tokenService;
    constructor(coletaService: ColetaService, tokenService: TokenService);
    cadastrar(data: ColetaCadastrarDto, req: any): Promise<ResultadoDto>;
}
