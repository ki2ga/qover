import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { IUser } from '@qover/shared-auth'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private authService: AuthService) {
        super()
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method validate
     *********************************************************************************************/
    async validate(username: string, password: string): Promise<IUser> {
        const user = await this.authService.validateUser(username, password)
        if (!user) throw new UnauthorizedException()
        else return {login: user.login}
    }
}