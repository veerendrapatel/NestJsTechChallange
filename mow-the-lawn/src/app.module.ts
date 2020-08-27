import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { LawnModule } from './lawn/lawn.module';

@Module({
  imports: [TasksModule, LawnModule],
})
export class AppModule {}
