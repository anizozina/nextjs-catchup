import { Module } from '@nestjs/common';
import { CommonsModule } from '../commons/commons.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [CommonsModule],
})
export class CatsModule {}
