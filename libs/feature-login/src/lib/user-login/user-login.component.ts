import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { finalize, startWith, switchMap, takeWhile } from 'rxjs/operators'

import { ISubmitLogin } from '@qover/ui-login'
import { UserLoginService } from './user-login.service'

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
        router: Router,
        userLoginService: UserLoginService,
    ) {
        this.loginResult$ = this.loginSubject.pipe(
            switchMap(login => userLoginService.submitLogin(login)),
            takeWhile(loginResult => !loginResult, true),
            startWith(true),
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
