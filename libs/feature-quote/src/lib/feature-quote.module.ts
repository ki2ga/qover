import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UserQuoteComponent } from './user-quote/user-quote.component'
import { UiQuoteModule } from '@qover/ui-quote'

const routes: Routes = [
    { path: '', component: UserQuoteComponent },
]

@NgModule({
    imports: [
        CommonModule,
        UiQuoteModule,

        RouterModule.forChild(routes),
    ],
    declarations: [
        UserQuoteComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class FeatureQuoteModule {}
