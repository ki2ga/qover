import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { switchMap, takeWhile, tap } from 'rxjs/operators'

import { QuoteService } from '@qover/data-access-quote'
import { ISubmitQuote } from '@qover/shared-quote'

@Component({
    selector: 'qover-user-quote',
    templateUrl: './user-quote.component.html',
    styleUrls: ['./user-quote.component.css'],
})
export class UserQuoteComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    public cars$ = this.quoteService.getCars()
    public quoteValidator$ = this.quoteService.getQuoteValidator()
    public offerId$: Observable<string>

    private quoteSubject: Subject<ISubmitQuote> = new Subject()

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private readonly quoteService: QuoteService,
        router: Router,
    ) {
        this.offerId$ = this.quoteSubject.pipe(
            switchMap(quote => quoteService.submitQuote(quote)),
            takeWhile(offerId => !offerId, true),
            tap(offerId => router.navigate(['quote', offerId])),
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submitQuote
     *********************************************************************************************/
    public submitQuote(quote: ISubmitQuote) {
        this.quoteSubject.next(quote)
    }
}
