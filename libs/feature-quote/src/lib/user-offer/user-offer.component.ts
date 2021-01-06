import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

import { QuoteService } from '@qover/data-access-quote'
import { IOffer } from '@qover/shared-quote'

@Component({
    selector: 'qover-user-offer',
    templateUrl: './user-offer.component.html',
    styleUrls: ['./user-offer.component.css'],
})
export class UserOfferComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    public plans$ = this.quoteService.getPlans()
    public offer$: Observable<IOffer>

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private readonly quoteService: QuoteService,
        route: ActivatedRoute,
    ) {
        const offerId = route.snapshot.params.offerId
        this.offer$ = this.quoteService.getOffer(offerId)
    }
}
