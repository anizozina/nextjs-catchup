import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly service: DogsService) {
    console.log(`DogsController is created.`);
  }
  @Get()
  getAll() {
    const ret = this.service.getCount();
    console.log(`dogs: ${ret}`);
    return ret;
  }
}
