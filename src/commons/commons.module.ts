import { Module } from '@nestjs/common';
import { CounterRequestService } from './counter/counter-request.service';
import { CounterTransientService } from './counter/counter-transient.service';
import { CounterService } from './counter/counter.service';

@Module({
  providers: [CounterService, CounterRequestService, CounterTransientService],
  exports: [CounterService, CounterRequestService, CounterTransientService],
})
export class CommonsModule {}
