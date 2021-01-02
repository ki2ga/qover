import { LOCALE_ID, NgModule } from '@angular/core'
import { CommonModule, registerLocaleData } from '@angular/common'
import localeEnBe from '@angular/common/locales/en-be'
import { FormsModule } from '@angular/forms'

import { OfferComponent } from './offer/offer.component'
import { QuoteComponent } from './quote/quote.component'

registerLocaleData(localeEnBe)

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        QuoteComponent,
        OfferComponent,
    ],
    providers: [ { provide: LOCALE_ID, useValue: 'en-BE' } ],
    exports: [
        QuoteComponent,
        OfferComponent,
    ],
})
export class UiQuoteModule {}
