import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonsModule } from './commons/commons.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [CommonsModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
