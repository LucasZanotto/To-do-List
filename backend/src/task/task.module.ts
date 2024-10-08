import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule, TaskModule],
  controllers: [],
  providers: [],
})
export class TaskModule {}
