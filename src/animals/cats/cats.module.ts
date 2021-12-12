import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CommonsModule } from '../../commons/commons.module';

@Module({
  providers: [CatsService],
  controllers: [CatsController],
  imports: [CommonsModule],
  exports: [CatsService],
})
export class CatsModule {}
