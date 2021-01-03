import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UiQuoteModule } from '@qover/ui-quote'
import { UserOfferComponent } from './user-offer/user-offer.component'
import { UserQuoteComponent } from './user-quote/user-quote.component'

const routes: Routes = [
    { path: '', component: UserQuoteComponent, pathMatch: 'full' },
    { path: ':quoteId', component: UserOfferComponent },
]

@NgModule({
    imports: [
        CommonModule,
        UiQuoteModule,

        RouterModule.forChild(routes),
    ],
    declarations: [
        UserQuoteComponent,
        UserOfferComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class FeatureQuoteModule {}
