import { Component, Input, OnChanges } from '@angular/core'

import { IOffer, IPlan } from '@qover/shared-quote'

@Component({
    selector: 'qover-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnChanges {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    @Input() plans: IPlan[]
    @Input() offer: IOffer
    
    public payYearly = true
    public selectedPlan: number

    ngOnChanges() {
        if (this.plans) this.selectedPlan = this.plans[0]?.planId
    }
}