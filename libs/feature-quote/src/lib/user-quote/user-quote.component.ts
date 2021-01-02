import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { finalize, startWith, switchMap, takeWhile, tap } from 'rxjs/operators'

import { AuthService } from '@qover/data-access-auth'
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
    public quoteId$: Observable<number>

    private quoteSubject: Subject<ISubmitQuote> = new Subject()

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private readonly quoteService: QuoteService,
        router: Router,
        authService: AuthService,
    ) {
        if (!authService.authenticated) router.navigate(['login'])

        let savedQuoteId: number
        this.quoteId$ = this.quoteSubject.pipe(
            switchMap(quote => quoteService.submitQuote(quote)),
            takeWhile(quoteId => !quoteId, true),
            tap(quoteId => savedQuoteId = quoteId),
            startWith(1),
            finalize(() => router.navigate(['/quotes', savedQuoteId])),
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
