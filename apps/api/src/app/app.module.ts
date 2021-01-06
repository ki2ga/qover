import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from '@qover/auth'
import { QuotesModule } from '@qover/quotes'
import { AppController } from './app.controller'

@Module({
    imports: [
        AuthModule,
        QuotesModule,

        MongooseModule.forRoot('mongodb+srv://qoverUser:qoverUserPassword@cluster0.t5ouw.mongodb.net/qover?retryWrites=true&w=majority'),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
