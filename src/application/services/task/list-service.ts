import { Task } from "@domain/task"
import { ITask } from "@domain/task/task.interface"

export class ListService {
    async execute(): Promise<ITask[]> {
        try {
            return await Task.find().exec()
        } catch (error) {
            throw new Error("Could not create task")
        }
    }
}