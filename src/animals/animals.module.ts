import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { AnimalsService } from './animals.service';
import { CommonsModule } from '../commons/commons.module';
import { AnimalsController } from './animals.controller';

@Module({
  imports: [CatsModule, DogsModule, CommonsModule],
  providers: [AnimalsService],
  controllers: [AnimalsController],
})
export class AnimalsModule {}
