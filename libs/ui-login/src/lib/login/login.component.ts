import { Component, EventEmitter, Input, Output } from '@angular/core'

import { ISubmitLogin } from '@qover/shared-auth'

@Component({
    selector: 'qover-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    @Input() invalidCredentials: boolean
    @Output() submitLogin: EventEmitter<ISubmitLogin> = new EventEmitter()

    public login: string
    public password: string
    public rememberMe: boolean

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submit emits ISubmitLogin action
     *********************************************************************************************/
    public submit(): void {
        this.submitLogin.emit({
            login: this.login,
            password: this.password,
            rememberMe: this.rememberMe,
        })

        this.login = undefined
        this.password = undefined
    }
}
