import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('animals/cats')
export class CatsController {
  constructor(private readonly service: CatsService) {}
  @Get()
  getAll() {
    return `cat service: ` + JSON.stringify(this.service.countUp());
  }
}
