import { Injectable } from '@nestjs/common';
import { CounterRequestService } from '../commons/counter/counter-request.service';
import { CounterTransientService } from '../commons/counter/counter-transient.service';
import { CounterService } from '../commons/counter/counter.service';

@Injectable()
export class DogsService {
  constructor(
    private readonly counter: CounterService,
    private readonly requestCounter: CounterRequestService,
    private readonly transientCounter: CounterTransientService,
  ) {
    console.log(`DogsService is created.`);
  }

  getCount() {
    const num = this.counter.countUp();
    const requestNum = this.requestCounter.countUp();
    const transientNum = this.transientCounter.countUp();
    return `${num}:${requestNum}:${transientNum}`;
  }
}
