import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { UsersModule } from '@qover/users'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { AuthController } from './auth.controller'

@Module({
    imports: [
        PassportModule,
        UsersModule,
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthGuard,
        AuthService,
        LocalStrategy,
    ],
    exports: [
        AuthGuard,
    ]
})
export class AuthModule {}
