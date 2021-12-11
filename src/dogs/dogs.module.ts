import { Module } from '@nestjs/common';
import { CommonsModule } from '../commons/commons.module';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  providers: [DogsService],
  imports: [CommonsModule],
  controllers: [DogsController],
})
export class DogsModule {}
