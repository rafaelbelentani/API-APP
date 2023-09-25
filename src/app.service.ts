import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Teste API !';
  }

  getObject(): any{
    let objeto = {
      id: 1,
      nome: "Rafael2"
  }

  return objeto
  }
}
