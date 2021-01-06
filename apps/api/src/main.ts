/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as session from 'express-session'

import { AppModule } from './app/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // Using default session storage - development only
    app.use(session({
        secret: 'development-only-secret',
        resave: false,
        rolling: true,
        saveUninitialized: false,
        cookie: { maxAge: 15 * 60 * 1000 }, // 15 minutes
    }))
    const globalPrefix = 'api'
    app.setGlobalPrefix(globalPrefix)
    const port = process.env.PORT || 3333
    await app.listen(port, () => {
        Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
    })
}

bootstrap()
