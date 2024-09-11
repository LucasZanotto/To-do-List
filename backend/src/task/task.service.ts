import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaSerive: PrismaService) {}



  create(createTaskDto: CreateTaskDto) {
    return this.prismaSerive.task.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return this.prismaSerive.task.findMany();
  }

  findOne(id: number) {
    return this.prismaSerive.task.findUnique({
      where: {id},
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prismaSerive.task.update({
      where: {id},
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return this.prismaSerive.task.delete({
      where: {id},
    });
  }
}
