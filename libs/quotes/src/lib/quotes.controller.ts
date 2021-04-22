import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'

import { AuthGuard } from '@qover/auth'
import { ICar, IOffer, IPlan, ISubmitQuote } from '@qover/shared-quote'
import { QuotesService } from './quotes.service'

@Controller('quotes')
@UseGuards(AuthGuard)
export class QuotesController {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private readonly quotesService: QuotesService) {}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Routes ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    @Post()
    async createOffer(@Body() quote: ISubmitQuote) {
        const offer = await this.quotesService.createOffer(quote)
        return offer?._id
    }

    @Get('cars')
    async getCars(): Promise<ICar[]> {
        const cars = await this.quotesService.findAllCars()
        return cars.map(({_id, brand}) => ({carId: _id, carName: brand}))
    }
    
    @Get('offers/:offerId')
    async getOffer(@Param('offerId') offerId: number): Promise<IOffer> {
        const offer = await this.quotesService.findOfferById(offerId)
        return offer.planPrices.reduce((acc, plan) => (acc[plan.planId] = plan.price, acc), {})
    }

    @Get('validator')
    async getValidator() {
        return this.quotesService.getValidatorDTO()
    }

    @Get('plans')
    async getPlans(): Promise<IPlan[]> {
        const plans = await this.quotesService.findAllPlans()
        return plans.map(({_id, name, maxTravelDays, medicalCoverage, personalAsistance, travelAsistance, durationYears}) =>
            ({planId: _id, name, maxTravelDays, medicalCoverage, personalAsistance, travelAsistance, durationYears})
        )
    }
}
