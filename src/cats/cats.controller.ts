import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    const data = this.catsService.findAll();
    console.log(`cats: ${data}`);
    return data;
  }
}
