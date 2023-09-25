import { Usuario } from "./usuario.entity";
import { UsuarioService } from './usuario.service';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UsuarioController {
    private readonly usuarioService;
    private authService;
    constructor(usuarioService: UsuarioService, authService: AuthService);
    listar(): Promise<Usuario[]>;
    cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    loginToken(req: any, data: any): Promise<{
        access_token: string;
    } | import("@nestjs/common").HttpException>;
}
