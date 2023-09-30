import {Body, Controller, Get, Post, UseGuards, Request, Req, HttpException, HttpStatus } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { TokenService } from 'src/token/token.service';
import { DetalheColetaService } from './detalhecoleta.service';
import { DetalheColetaCadastrarDto } from './dto/detalhecoleta.cadastrar.dto';
import { ColetaService } from 'src/coleta/coleta.service';


@Controller('detalhecoleta')
export class DetalheColetaController {
  constructor(private readonly detalhecoletaService: DetalheColetaService, 
    private readonly tokenService: TokenService) {}
       

    @Post('cadastrar')
    async cadastrar(@Body() data: DetalheColetaCadastrarDto, @Req() req): Promise<ResultadoDto>{
      let coleta
    return this.detalhecoletaService.cadastrar(data, coleta)
    }

    }