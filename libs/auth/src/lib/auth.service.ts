import { Injectable } from '@nestjs/common'
import { compare } from 'bcrypt'

import { User, UsersService } from '@qover/users'

@Injectable()
export class AuthService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private usersService: UsersService) {}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method validateUser
     *********************************************************************************************/
    async validateUser(username: string, password: string): Promise<User> {
        const user = await this.usersService.findOne(username)
        if (user && await compare(password, user.password)) {
            user.password = ''
            return user
        }
        return null
    }
}