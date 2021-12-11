import { Injectable } from '@nestjs/common';
import { CounterService } from '../commons/counter/counter.service';

@Injectable()
export class DogsService {
  constructor(private readonly counter: CounterService) {
    console.log(`DogsService is created.`);
  }

  getCount() {
    const num = this.counter.countUp();
    return `${num}`;
  }
}
