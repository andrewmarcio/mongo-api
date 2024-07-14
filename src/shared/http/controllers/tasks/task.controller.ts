import { TaskDTO } from '@domain/task';
import { CreateService } from '@services/task/create-service';
import { ListService } from '@services/task/list-service';
import { RequestWithBody } from '@shared/types';
import { Request, Response } from 'express'


export class TaskController {
    async list(_: Request, res: Response) {
        const tasks = await (new ListService).execute()
        res.status(200).json({
            tasks
        }).end();
    }

    async create(req: RequestWithBody<TaskDTO>, res: Response) {
        const body = req.body!
        const task = await (new CreateService).execute(body)
        res.status(201).json({
            task
        }).end();
    }
}