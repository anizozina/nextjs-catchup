import { Module } from '@nestjs/common';
import { CounterService } from './counter/counter.service';

@Module({
  providers: [CounterService],
  exports: [CounterService],
})
export class CommonsModule {}
