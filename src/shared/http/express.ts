import { Server } from 'express'
import { Environments } from '@environments/environment'

function createExpressServer(app: Server) {
    app.listen(Number(Environments.getPort()), () => {
        console.log(`Express server listening on port ${Environments.getPort()}`)
    })
}

export { createExpressServer }