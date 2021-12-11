import { Injectable } from '@nestjs/common';
import { CounterRequestService } from '../commons/counter/counter-request.service';
import { CounterTransientService } from '../commons/counter/counter-transient.service';
import { CounterService } from '../commons/counter/counter.service';

@Injectable()
export class CatsService {
  constructor(
    private readonly requestCounter: CounterRequestService,
    private readonly transientCounter: CounterTransientService,
    private readonly counterService: CounterService,
  ) {
    console.log(`CatsService is created.`);
  }

  findAll() {
    const num = this.counterService.countUp();
    const requestNum = this.requestCounter.countUp();
    const transientNum = this.transientCounter.countUp();
    return `${num}:${requestNum}:${transientNum}`;
  }
}
