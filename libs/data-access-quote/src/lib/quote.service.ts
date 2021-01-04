import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

import { ICar, IOffer, IPlan, IQuoteValidator, ISubmitQuote } from '@qover/shared-quote'

@Injectable({ providedIn: 'root' })
export class QuoteService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    // cache
    private _cars: Observable<ICar[]>
    private _plans: Observable<IPlan[]>

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private readonly http: HttpClient) { }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method getCars
     *********************************************************************************************/
    public getCars(): Observable<ICar[]> {
        if (!this._cars) {
            this._cars = this.http.get<ICar[]>('/api/quotes/cars').pipe(shareReplay(1))
        }
        return this._cars
    }

    /**********************************************************************************************
     * @method getOffer
     *********************************************************************************************/
    public getOffer(quoteId: number): Observable<IOffer> {
        return this.http.get<IOffer>(`/api/quotes/offers/${quoteId}`)
    }

    /**********************************************************************************************
     * @method getPlans
     *********************************************************************************************/
    public getPlans(): Observable<IPlan[]> {
        if (!this._plans) {
            this._plans = this.http.get<IPlan[]>('/api/quotes/plans').pipe(shareReplay(1))
        }
        return this._plans
    }

    /**********************************************************************************************
     * @method getQuoteValidator
     *********************************************************************************************/
    public getQuoteValidator(): Observable<IQuoteValidator> {
        return of({
            minAge: 18,
            minPrice: 5000,
            minAgePerCar: {3: 25},
        })
    }

    /**********************************************************************************************
     * @method submitLogin
     *********************************************************************************************/
    public submitQuote(submitQuote: ISubmitQuote): Observable<number> {
        return of(42)
        return this.http.post<number>('/api/login', submitQuote)
    }
}
