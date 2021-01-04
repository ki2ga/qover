import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { QuotesModule } from '@qover/quotes'

@Module({
    imports: [
        QuotesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
