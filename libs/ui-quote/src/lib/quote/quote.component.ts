import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForm } from '@angular/forms'

import { EQuoteValidator, ICar, IQuoteValidator, ISubmitQuote, validateQuote } from '@qover/shared-quote'

@Component({
    selector: 'qover-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    @Input() cars: ICar[]
    @Input() validator: IQuoteValidator
    @Output() submitQuote: EventEmitter<ISubmitQuote> = new EventEmitter()

    public age: number
    public carId: number
    public price: number
    public invalid: EQuoteValidator

    public invalidMessages = {
        [EQuoteValidator.AGE]: 'Sorry! The driver is too young',
        [EQuoteValidator.PRICE]: 'Sorry! The price of the car is too low',
        [EQuoteValidator.OTHER]: 'Sorry! We can not accept this particular risk',
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method submit validates quote and if valid emits ISubmitQuote action
     *********************************************************************************************/
    public submit(formData: NgForm): void {
        const quote: ISubmitQuote = {
            carId: Number(this.carId),
            carPrice: this.price,
            driverAge: this.age,
        }
        this.invalid = validateQuote(quote, this.validator)
        switch (this.invalid) {
            case EQuoteValidator.OK:
                formData.form.controls['car'].setErrors(null)
                formData.form.controls['age'].setErrors(null)
                this.submitQuote.emit(quote)
                break
            case EQuoteValidator.OTHER:
                formData.form.controls['car'].setErrors({incorrect: true})
                formData.form.controls['age'].setErrors({incorrect: true})
                break
        }
    }
}
