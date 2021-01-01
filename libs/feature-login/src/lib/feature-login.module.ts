import { NgModule } from '@angular/core'
import { UserLoginComponent } from './user-login/user-login.component'
import { UiLoginModule } from '@qover/ui-login'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: '', component: UserLoginComponent }
];

@NgModule({
    declarations: [
        UserLoginComponent
    ],
    imports: [
        UiLoginModule,

        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class FeatureLoginModule {}
