import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  constructor() {
    console.log('CounterService is created.');
  }
  count: number = 0;

  countUp(): number {
    return ++this.count;
  }
}
