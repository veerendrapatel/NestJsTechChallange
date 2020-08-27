import { Controller } from '@nestjs/common';
import { LawnService } from './lawn.service';

@Controller('lawn')
export class LawnController {
  constructor(private readonly lawnService:LawnService) {
    
  }
}
