import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { TokenService } from './token.service';
import { tokenProviders } from './token.providers';
import { Tokencontroller } from './token.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UsuarioModule],
  controllers: [Tokencontroller],
  providers: [
    ...tokenProviders,
    TokenService
  ],
  exports: [TokenService],
})
export class TokenModule {}