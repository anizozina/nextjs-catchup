import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class CounterTransientService {
  constructor() {
    console.log('CounterTransientService is created.');
  }
  count: number = 0;

  countUp(): number {
    return ++this.count;
  }
}
