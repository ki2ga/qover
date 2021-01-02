import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'

import { ICar, IOffer, IPlan, IQuoteValidator, ISubmitQuote } from '@qover/shared-quote'

@Injectable({ providedIn: 'root' })
export class QuoteService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Instance members //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    private _cars: ICar[]

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
        return of([
            {carId: 1, carName: 'Audi'},
            {carId: 2, carName: 'BMW'},
            {carId: 3, carName: 'Porsche'},
        ])
        return this.http.get<ICar[]>('/api/login')
    }

    /**********************************************************************************************
     * @method getOffer
     *********************************************************************************************/
    public getOffer(quoteId: number): Observable<IOffer> {
        return of({1: 78.30, 2: 114.71})
    }

    /**********************************************************************************************
     * @method getPlans
     *********************************************************************************************/
    public getPlans(): Observable<IPlan[]> {
        return of([
            {planId: 1, name: 'Global', maxTravelDays: 90, medicalCoverage: 1000000, personalAsistance: 5000, travelAsistance: 1000, durationYears: 1},
            {planId: 2, name: 'Universe', maxTravelDays: 180, medicalCoverage: 3000000, personalAsistance: 10000, travelAsistance: 2500, durationYears: 1},
        ])
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
