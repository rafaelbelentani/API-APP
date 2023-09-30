import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DetalheColetaController } from './detalhecoleta.controller';
import { detalhecoletaProviders } from './detalhecoleta.providers';
import {  DetalheColetaService } from './detalhecoleta.service';
import { TokenModule } from 'src/token/token.module';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [DatabaseModule, TokenModule],
  controllers: [DetalheColetaController],
  providers: [
    ...detalhecoletaProviders,
    DetalheColetaService,
    JwtService
  ],
  exports: [DetalheColetaService],
})
export class DetalheColetaModule {}