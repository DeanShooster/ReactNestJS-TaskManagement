import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task{
    @Prop({required: true})
    importance: number;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    desc: string;

    @Prop()
    created: Date;

    @Prop({required: true})
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);