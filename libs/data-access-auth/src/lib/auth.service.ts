import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { ISubmitLogin, IUser } from '@qover/shared-auth'

@Injectable({ providedIn: 'root' })
export class AuthService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private readonly http: HttpClient) { }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submitLogin
     *********************************************************************************************/
    public submitLogin(submitLogin: ISubmitLogin): Observable<IUser> {
        return this.http.post<IUser>('/api/auth/login', submitLogin).pipe(
            catchError(err => of(null))
        )
    }
}