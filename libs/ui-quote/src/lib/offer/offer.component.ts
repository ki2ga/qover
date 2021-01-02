import { Component, Input } from '@angular/core'

import { IOffer, IPlan } from '@qover/shared-quote'

@Component({
  selector: 'qover-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    @Input() plans: IPlan[]
    @Input() offer: IOffer
    
    public payYearly = true
    public selectedPlan: number = 1
}
