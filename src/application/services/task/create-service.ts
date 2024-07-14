import { Task, TaskDTO } from "@domain/task";
import { ITask } from "@domain/task/task.interface";


export class CreateService {
    async execute(data: TaskDTO): Promise<ITask> {
        try {
            const task = await Task.create(data)
            return task
        } catch (error) {
            throw new Error("Could not create task")
        }
    }
}