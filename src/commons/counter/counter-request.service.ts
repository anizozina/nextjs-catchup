import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class CounterRequestService {
  constructor() {
    console.log('CounterRequestService is created.');
  }
  count: number = 0;

  countUp(): number {
    return ++this.count;
  }
}
