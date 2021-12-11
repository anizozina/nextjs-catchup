import { Module } from '@nestjs/common';
import { CommonsModule } from '../commons/commons.module';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { CatsModule } from '../cats/cats.module';

@Module({
  providers: [DogsService],
  imports: [CommonsModule, CatsModule],
  controllers: [DogsController],
})
export class DogsModule {}
