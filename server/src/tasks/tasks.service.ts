import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/db/model/task.schema';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument> ) {}

    // Returns all existing tasks.
    async GetAllTasks() {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }

    // Returns a specified task.
    async GetTaskByTitle(taskTitle: string){
        const task = await this.taskModel.findOne( {title: taskTitle} ).exec();
        if( !task ) throw new NotFoundException(`Task ${taskTitle} was not found.`);
        return task;
    }

    // Creates a new task (Duplication allowed).
    async CreateTask( newTask: Task ) {
        const createdTask = { importance: newTask.importance, title: newTask.title, desc: newTask.desc, created: new Date(),status: newTask.status };
        const task = new this.taskModel(createdTask);
        return (await task.save());
    }

    // Deletes a task.
    async DeleteTask(taskTitle: string){        
        const task = await this.taskModel.findOneAndDelete( {title: taskTitle} ).exec();
        if( !task ) throw new NotFoundException(`Deletion failed. Task ${taskTitle} was not found.`);
        return task;
    }

    // Updates a task status.
    async UpdateTask(taskTitle: string, taskStatus: string){
        const task = await this.taskModel.findOne( {title: taskTitle} ).exec();
        if( !task ) throw new NotFoundException(`Deletion failed. Task ${taskTitle} was not found.`);
        task.status = taskStatus;
        return (await task.save());
    }    
}
