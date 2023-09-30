import {Body, Controller, Get, Post, UseGuards, Request, Req, HttpException, HttpStatus } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { ColetaService } from './coleta.service';
import { ColetaCadastrarDto } from './dto/coleta.cadastrar.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Usuario } from 'src/usuario/usuario.entity';
import { TokenService } from 'src/token/token.service';
import { Coleta } from './coleta.entity';

@Controller('coleta')
export class ColetaController {
  constructor(private readonly coletaService: ColetaService, 
    private readonly tokenService: TokenService) {}
       

  @UseGuards(JwtAuthGuard)
  @Post('cadastrar')
   async cadastrar(@Body() data: ColetaCadastrarDto, @Req() req): Promise<ResultadoDto>{ 
    let token = req.headers.authorization
    console.log(token)
    let usuario: Usuario = await this.tokenService.getUsuarioByToken(token)
    if (usuario){
      return this.coletaService.cadastrar(data, usuario)
    }else{
      throw new HttpException({
        errorMessage: 'Token Inválido'                
      }, HttpStatus.UNAUTHORIZED)
    }
    }


}