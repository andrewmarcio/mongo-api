import { Request } from 'express'

export type RequestWithBody<T extends unknown> = Request & {
    body?: T
}