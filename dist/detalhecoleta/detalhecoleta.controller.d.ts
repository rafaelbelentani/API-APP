import { ResultadoDto } from 'src/dto/resultado.dto';
import { TokenService } from 'src/token/token.service';
import { DetalheColetaService } from './detalhecoleta.service';
import { DetalheColetaCadastrarDto } from './dto/detalhecoleta.cadastrar.dto';
export declare class DetalheColetaController {
    private readonly detalhecoletaService;
    private readonly tokenService;
    constructor(detalhecoletaService: DetalheColetaService, tokenService: TokenService);
    cadastrar(data: DetalheColetaCadastrarDto, req: any): Promise<ResultadoDto>;
}
