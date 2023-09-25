import { Repository } from 'typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { ItemCadastrarDto } from './dto/item.cadastras.dto';
import { Item } from './item.entity';
export declare class ItemService {
    private itemRepository;
    constructor(itemRepository: Repository<Item>);
    cadastrar(data: ItemCadastrarDto, usuario: Usuario): Promise<ResultadoDto>;
}
