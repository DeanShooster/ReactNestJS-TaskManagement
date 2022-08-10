import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Task } from 'src/db/model/task.schema';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(@InjectConnection() private connection: Connection ,private tasksService: TasksService,) {}

    @Get()
    async GetAllTasks() { return this.tasksService.GetAllTasks(); }

    @Get('/:taskTitle')
    async GetTaskByTitle( @Param('taskTitle') taskTitle: string ) { return this.tasksService.GetTaskByTitle(taskTitle) }

    @Post()
    async CreateTask( @Body('newTask') newTask: Task ) { return this.tasksService.CreateTask(newTask); }

    @Patch('/:taskTitle')
    async UpdateTask( @Param('taskTitle') taskTitle: string,@Body('taskStatus') taskStatus: string ) { return this.tasksService.UpdateTask(taskTitle,taskStatus);}

    @Delete('/:taskTitle')
    async DeleteTask( @Param('taskTitle') taskTitle: string ) { return this.tasksService.DeleteTask(taskTitle); }
}
