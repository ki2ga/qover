import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { finalize, startWith, switchMap, takeWhile } from 'rxjs/operators'

import { AuthService } from '@qover/data-access-auth'
import { ISubmitLogin } from '@qover/shared-auth'

@Component({
    selector: 'qover-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    public loginResult$: Observable<boolean>

    private loginSubject: Subject<ISubmitLogin> = new Subject()

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private readonly router: Router,
        authService: AuthService,
    ) {
        if (authService.authenticated) this.redirectAuthenticated()

        this.loginResult$ = this.loginSubject.pipe(
            switchMap(login => authService.submitLogin(login)),
            takeWhile(loginResult => !loginResult, true),
            startWith(true),
            finalize(() => {
                authService.authenticated = true
                this.redirectAuthenticated()
            }),
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

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Private methods ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method redirectAuthenticated
     *********************************************************************************************/
    public redirectAuthenticated() {
        console.log('authent')
        this.router.navigate(['/'])
    }
}
