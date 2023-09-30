import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DetalheColeta } from './detalhecoleta.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { DetalheColetaCadastrarDto } from './dto/detalhecoleta.cadastrar.dto';
import { Coleta } from 'src/coleta/coleta.entity';

@Injectable()
export class DetalheColetaService {
  constructor(
    @Inject('DETALHECOLETA_REPOSITORY')
    private detalhecoletaRepository: Repository<DetalheColeta>,
  ) {}  

  async cadastrar(data: DetalheColetaCadastrarDto, coleta: Coleta): Promise<ResultadoDto>{
    let detalhecoleta = new DetalheColeta()
    detalhecoleta.item = data.item
    detalhecoleta.quantidade = data.quantidade
    detalhecoleta.status = data.status
    detalhecoleta.coleta = coleta
    return this.detalhecoletaRepository.save(detalhecoleta).then(() => {
      return <ResultadoDto>{
        status: true,
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
      }
    })
  }
}