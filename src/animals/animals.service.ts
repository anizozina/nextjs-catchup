import { Injectable } from '@nestjs/common';
import { CounterRequestService } from '../commons/counter/counter-request.service';
import { CounterTransientService } from '../commons/counter/counter-transient.service';
import { CounterService } from '../commons/counter/counter.service';
import { CatsService } from './cats/cats.service';
import { DogsService } from './dogs/dogs.service';

@Injectable()
export class AnimalsService {
  constructor(
    private readonly catService: CatsService,
    private readonly dogService: DogsService,
    private readonly singletonCount: CounterService,
    private readonly requestCount: CounterRequestService,
    private readonly transientCount: CounterTransientService,
  ) {}

  countUp() {
    const cats = this.catService.countUp();
    const dogs = this.dogService.countUp();
    const singletonCount = this.singletonCount.countUp();
    const requestCount = this.requestCount.countUp();
    this.transientCount.countUp();
    const transientCount = this.transientCount.countUp();
    return { cats, dogs, singletonCount, requestCount, transientCount };
  }
}
