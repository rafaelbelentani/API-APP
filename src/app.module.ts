import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ColetaModule } from './coleta/coleta.module';
import { JwtService } from '@nestjs/jwt';
import { DetalheColetaModule } from './detalhecoleta/detalhecoleta.module';

@Module({
  imports: [
    AuthModule,
    ColetaModule,
    DetalheColetaModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}