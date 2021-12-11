import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { CommonsModule } from './commons/commons.module';

@Module({
  imports: [CatsModule, DogsModule, CommonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
