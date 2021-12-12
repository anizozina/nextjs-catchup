import { Controller, Get } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly service: AnimalsService) {}

  @Get()
  getAll() {
    return `animal service: ` + JSON.stringify(this.service.countUp());
  }
}
