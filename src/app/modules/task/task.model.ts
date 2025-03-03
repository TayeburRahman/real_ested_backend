import mongoose, { Schema, Document, Types } from 'mongoose';
import { ITodoList } from './task.interface';


const todoListSchema = new Schema<ITodoList>(
    {
        member: {
            type: [Schema.Types.ObjectId],
            ref: 'Member',
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
        dueDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'InProgress', 'Completed'],
            default: "Pending",
        }
    },
    { timestamps: true }
);

const TodoList = mongoose.model<ITodoList>('TodoList', todoListSchema);
export default TodoList;
