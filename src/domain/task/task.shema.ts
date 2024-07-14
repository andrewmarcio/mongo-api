import mongoose from "mongoose";
import { ITask } from "./task.interface";
import { v4 } from 'uuid'

const taskSchema = new mongoose.Schema<ITask>({
    _id: {
        type: 'string',
        default: v4
    },
    label: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
    },
    finished: {
        type: 'boolean',
        default: false
    },
    created_at: {
        type: "string",
        default: () => (new Date).toISOString()
    },
    updated_at: {
        type: "string",
        default: () => (new Date).toISOString()
    }
})

export { taskSchema }