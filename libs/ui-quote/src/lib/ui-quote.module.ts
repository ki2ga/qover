import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { QuoteComponent } from './quote/quote.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        QuoteComponent,
    ],
    exports: [
        QuoteComponent,
    ],
})
export class UiQuoteModule {}
