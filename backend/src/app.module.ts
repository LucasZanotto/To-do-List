import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [DbModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
