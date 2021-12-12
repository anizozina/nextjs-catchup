import { Injectable } from '@nestjs/common';
import { CounterRequestService } from '../../commons/counter/counter-request.service';
import { CounterTransientService } from '../../commons/counter/counter-transient.service';
import { CounterService } from '../../commons/counter/counter.service';

@Injectable()
export class CatsService {
  constructor(
    private readonly counterService: CounterService,
    private readonly transientCounter: CounterTransientService,
    private readonly requestCounter: CounterRequestService,
  ) {}

  countUp() {
    const singletonCount = this.counterService.countUp();
    const requestCount = this.requestCounter.countUp();
    const transientCount = this.transientCounter.countUp();
    return { singletonCount, requestCount, transientCount };
  }
}
