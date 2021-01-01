import { Component, OnInit } from '@angular/core'
import { ISubmitLogin } from '@qover/ui-login'

@Component({
    selector: 'qover-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    public invalidCredentials: boolean

    constructor() { }

    ngOnInit(): void {
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submitLogin
     *********************************************************************************************/
    public submitLogin(submitLogin: ISubmitLogin): void {
        this.invalidCredentials = true
  }
}
