import { Injectable } from '@nestjs/common';
import { CounterService } from '../commons/counter/counter.service';

@Injectable()
export class CatsService {
  constructor(private readonly counter: CounterService) {
    console.log(`CatsService is created`);
  }
  findAll() {
    const num = this.counter.countUp();
    return `${num}`;
  }
}
