import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuario/usuario.entity';
import { ItemCadastrarDto } from './dto/item.cadastras.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ITEM_REPOSITORY')
    private itemRepository: Repository<Item>,
  ) {}

  
  async cadastrar(data: ItemCadastrarDto, usuario: Usuario): Promise<ResultadoDto>{
    let item = new Item
    item.item = data.item
    
    
    return this.itemRepository.save(item).then(() => { 
      return <ResultadoDto>{
      status: true,
      mensagem: "Item cadastrado com sucesso."
    }

    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao casdastrar o item."
      }
    })
}
}