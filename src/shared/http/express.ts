import { Server } from 'express'
import { Environments, router as Router } from '@infra'
import bodyParser from 'body-parser'

function createExpressServer(app: Server) {
    app.use(bodyParser.json())
    app.use(Router)
    app.listen(Number(Environments.getPort()), () => {
        console.log(`Express server listening on port ${Environments.getPort()}`)
    })
}

export { createExpressServer }