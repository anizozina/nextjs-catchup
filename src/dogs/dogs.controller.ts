import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly service: DogsService,
    private readonly catService: CatsService,
  ) {
    console.log(`DogsController is created.`);
  }
  @Get()
  getAll() {
    const ret = this.service.getCount();
    console.log(`dogs: ${ret}`);
    const catret = this.catService.findAll();
    console.log(`cats: ${catret}`);
    return `${ret}\n${catret}`;
  }
}
