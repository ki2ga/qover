import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

import { ISubmitLogin } from '@qover/shared-auth'

@Injectable({ providedIn: 'root' })
export class AuthService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    private _authenticated: boolean

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private readonly http: HttpClient) { }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Accessors /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    public get authenticated() {
        return this._authenticated
    }

    public set authenticated(value: boolean) {
        this._authenticated = value
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submitLogin
     *********************************************************************************************/
    public submitLogin(submitLogin: ISubmitLogin) {
        return of(submitLogin.login === 'qover')
        return this.http.post<boolean>('/api/login', submitLogin)
    }
}