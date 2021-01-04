import { Injectable } from '@nestjs/common'

import { ICar, IOffer, IPlan, ISubmitQuote } from '@qover/shared-quote'

interface IOfferParams {
    fixed: number
    perc: number
}

interface ICarOfferParams {
    [planId: number]: IOfferParams
}

@Injectable()
export class QuotesService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method findAllCars
     *********************************************************************************************/
    public async findAllCars(): Promise<ICar[]> {
        return [
            {carId: 1, carName: 'Audi'},
            {carId: 2, carName: 'BMW'},
            {carId: 3, carName: 'Porsche'},
        ]
    }

    /**********************************************************************************************
     * @method findAllPlans
     *********************************************************************************************/
    public async findAllPlans(): Promise<IPlan[]> {
        return [
            {planId: 1, name: 'Global', maxTravelDays: 90, medicalCoverage: 1000000, personalAsistance: 5000, travelAsistance: 1000, durationYears: 1},
            {planId: 2, name: 'Universe', maxTravelDays: 180, medicalCoverage: 3000000, personalAsistance: 10000, travelAsistance: 2500, durationYears: 1},
        ]
    }

    /**********************************************************************************************
     * @method getOffer
     *********************************************************************************************/
    public async getOffer(quoteId: number): Promise<IOffer> {
        const quote = await this.findQuoteById(quoteId)
        const params = await this.findCarOfferParams(quote.carId)
        return Object.entries(params).reduce((acc, [planId, param]: [string, IOfferParams]) => {
            acc[planId] = param.fixed + quote.carPrice * param.perc / 100
            return acc
        }, {})
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Private methods ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method findCarOfferParams
     *********************************************************************************************/
    private async findCarOfferParams(carId: number): Promise<ICarOfferParams> {
        switch (carId) {
            case 1: return {1: {fixed: 250, perc: 0}, 2: {fixed: 250, perc: 0.3}}
            case 2: return {1: {fixed: 150, perc: 0}, 2: {fixed: 150, perc: 0.4}}
            case 3: return {1: {fixed: 500, perc: 0}, 2: {fixed: 500, perc: 0.7}}
        }
    }

    /**********************************************************************************************
     * @method findQuote
     *********************************************************************************************/
    private async findQuoteById(quoteId: number): Promise<ISubmitQuote> {
        return {
            carId: 2,
            carPrice: 38000,
            driverAge: 30,
        }
    }
}
