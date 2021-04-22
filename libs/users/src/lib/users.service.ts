import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method createUser
     *********************************************************************************************/
    public async createUser(user: User): Promise<UserDocument> {
        const userDocument = await (new this.userModel(user)).save()
        userDocument.password = ''
        return userDocument
    }

    /**********************************************************************************************
     * @method findOne
     *********************************************************************************************/
    public findOne(login: string): Promise<UserDocument> {
        return this.userModel.findOne({login}).exec()
    }
}
