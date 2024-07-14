import { Environments } from "@infra";
import mongoose from "mongoose";

async function createMongooseConnection(callback?: () => void) {
    try {
        await mongoose.connect(Environments.getMongoDbURL());
        if (callback) {
            callback()
        }
    } catch (error) {
        console.error({
            type: 'Mongoose',
            error
        });
    }
}

export { createMongooseConnection }