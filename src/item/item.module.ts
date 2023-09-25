import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { itemProviders } from './item.providers';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [
    ...itemProviders,
   ItemService,
  ],
  exports: [ItemService]
})
export class ItemModule {}