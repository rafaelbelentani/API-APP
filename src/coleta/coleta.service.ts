import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Coleta } from './coleta.entity';
import { ColetaCadastrarDto } from './dto/coleta.cadastrar.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class ColetaService {
  constructor(
    @Inject('COLETA_REPOSITORY')
    private coletaRepository: Repository<Coleta>,
  ) {}  

  async cadastrar(data: ColetaCadastrarDto, usuario: Usuario): Promise<ResultadoDto>{
    let coleta = new Coleta()
    coleta.data_hora = data.data_hora
    coleta.pedido = data.pedido
    coleta.usuario = usuario
    coleta.cliente = usuario
    coleta.filial = usuario
    return this.coletaRepository.save(coleta).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Coleta cadastrada com sucesso!"
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao casdastrar a coleta!",
      }
    })
  }
}