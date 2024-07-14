import { TaskController } from '@shared/http/controllers';
import { Router } from 'express'

const taskRouter = Router()

const { list, create } = new TaskController

taskRouter.get('/', list)

taskRouter.post('/create', create)

export { taskRouter }