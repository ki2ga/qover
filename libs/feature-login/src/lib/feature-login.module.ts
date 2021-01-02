import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UserLoginComponent } from './user-login/user-login.component'
import { UiLoginModule } from '@qover/ui-login'

const routes: Routes = [
    { path: '', component: UserLoginComponent }
]

@NgModule({
    imports: [
        CommonModule,
        UiLoginModule,
        
        RouterModule.forChild(routes),
    ],
    declarations: [
        UserLoginComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class FeatureLoginModule {}
