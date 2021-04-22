import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { finalize, startWith, switchMap, takeWhile } from 'rxjs/operators'

import { AuthService } from '@qover/data-access-auth'
import { ISubmitLogin, IUser } from '@qover/shared-auth'

@Component({
    selector: 'qover-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    public user$: Observable<IUser>

    private loginSubject: Subject<ISubmitLogin> = new Subject()

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(router: Router, authService: AuthService) {
        this.user$ = this.loginSubject.pipe(
            switchMap(login => authService.submitLogin(login)),
            takeWhile(user => !user, true),
            startWith({} as IUser),
            finalize(() => router.navigate(['/'])),
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submitLogin
     *********************************************************************************************/
    public submitLogin(login: ISubmitLogin) {
        this.loginSubject.next(login)
    }
}
