import mongoose from "mongoose";
import { taskSchema } from "./task.shema";

export const Task = mongoose.model('Task', taskSchema);