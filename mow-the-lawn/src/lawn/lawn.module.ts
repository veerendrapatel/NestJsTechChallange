import { Module } from '@nestjs/common';
import { LawnController } from './lawn.controller';
import { LawnService } from './lawn.service';

@Module({
  controllers: [LawnController],
  providers: [LawnService]
})
export class LawnModule {}
