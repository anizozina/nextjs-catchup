import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { CommonsModule } from '../../commons/commons.module';

@Module({
  providers: [DogsService],
  controllers: [DogsController],
  imports: [CommonsModule],
  exports: [DogsService],
})
export class DogsModule {}
