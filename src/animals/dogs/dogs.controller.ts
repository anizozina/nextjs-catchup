import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('animals/dogs')
export class DogsController {
  constructor(private readonly service: DogsService) {}
  @Get()
  getAll() {
    return `dog service: ` + JSON.stringify(this.service.countUp());
  }
}
