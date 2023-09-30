import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ColetaController } from './coleta.controller';
import { coletaProviders } from './coleta.providers';
import { ColetaService } from './coleta.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [DatabaseModule, TokenModule],
  controllers: [ColetaController],
  providers: [
    ...coletaProviders,
    ColetaService,
    JwtService
  ],
  exports: [ColetaService],
})
export class ColetaModule {}