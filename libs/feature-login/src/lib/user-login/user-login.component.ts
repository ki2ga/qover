import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of, Subject } from 'rxjs'
import { catchError, finalize, startWith, switchMap, takeWhile } from 'rxjs/operators'

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

    public loginResult$: Observable<IUser>

    private loginSubject: Subject<ISubmitLogin> = new Subject()

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private readonly router: Router,
        authService: AuthService,
    ) {
        this.loginResult$ = this.loginSubject.pipe(
            switchMap(login => authService.submitLogin(login)),
            takeWhile(loginResult => !loginResult, true),
            startWith({} as IUser),
            finalize(() => this.router.navigate(['/'])),
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
