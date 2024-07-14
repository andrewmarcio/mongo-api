export interface ITask {
    _id: string
    label: string
    description?: string
    finished: boolean
    created_at?: Date
    updated_at?: Date
}