import {Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import {  ItemCadastrarDto } from './dto/item.cadastras.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @UseGuards(AuthGuard('local'))
    
  @Post('cadastrar')
   async cadastrar(@Body() data: ItemCadastrarDto): Promise<ResultadoDto>{ 

    let usuario = null
    return this.itemService.cadastrar(data, usuario)
    }

  
}