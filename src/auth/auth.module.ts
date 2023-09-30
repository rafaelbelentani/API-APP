import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TokenService } from 'src/token/token.service';
import { TokenModule } from 'src/token/token.module';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsuarioService } from 'src/usuario/usuario.service';
import { ColetaModule } from 'src/coleta/coleta.module';


@Module({
  imports: [ UsuarioModule, PassportModule, TokenModule,
   JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s'},
   }),],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtModule, AuthService]
})
export class AuthModule {}
