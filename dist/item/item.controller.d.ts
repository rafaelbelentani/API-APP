import { ResultadoDto } from 'src/dto/resultado.dto';
import { ItemCadastrarDto } from './dto/item.cadastras.dto';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    cadastrar(data: ItemCadastrarDto): Promise<ResultadoDto>;
}
