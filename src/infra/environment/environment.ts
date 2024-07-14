import { IEnvironments } from "./environment.interface";

const Environments: IEnvironments = {
    getPort(): string {
        return process.env.PORT || ''
    },
    getMongoDbURL(): string {
        return process.env.MONGODB_URL_CONNECTION || ''
    }
}

export { Environments }