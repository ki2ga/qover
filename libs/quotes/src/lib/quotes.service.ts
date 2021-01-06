import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { ISubmitQuote } from '@qover/shared-quote'
import { Car, CarDocument, PlanPriceParams } from './schemas/car.schema'
import { Plan, PlanDocument } from './schemas/plan.schema'
import { Offer, OfferDocument } from './schemas/offer.schema'
import { Validator, ValidatorDocument } from './schemas/validator.schema'

@Injectable()
export class QuotesService {

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Constructor ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        @InjectModel(Car.name) private carModel: Model<CarDocument>,
        @InjectModel(Offer.name) private offerModel: Model<OfferDocument>,
        @InjectModel(Plan.name) private planModel: Model<PlanDocument>,
        @InjectModel(Validator.name) private quoteValidatorModel: Model<ValidatorDocument>,
    ) {}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Public methods ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method createOffer
     *********************************************************************************************/
    public async createOffer(quote: ISubmitQuote): Promise<OfferDocument> {
        const params = await this.findCarOfferParams(quote.carId)
        const planPrices = params.map(({planId, fixed, permille}) => ({
            planId,
            price: fixed + quote.carPrice * permille / 1000
        }))

        const offer = new this.offerModel(Object.assign({}, quote, {planPrices}))
        return offer.save()
    }

    /**********************************************************************************************
     * @method findAllCars
     *********************************************************************************************/
    public async findAllCars(): Promise<CarDocument[]> {
        return this.carModel.find().exec()
    }

    /**********************************************************************************************
     * @method findAllPlans
     *********************************************************************************************/
    public async findAllPlans(): Promise<PlanDocument[]> {
        return this.planModel.find().exec()
    }

    /**********************************************************************************************
     * @method findOfferById
     *********************************************************************************************/
    public async findOfferById(offerId: number): Promise<OfferDocument> {
        return this.offerModel.findById(offerId, {planPrices: true}).exec()
    }

    /**********************************************************************************************
     * @method findQuoteValidator
     *********************************************************************************************/
    public findQuoteValidator(): Promise<ValidatorDocument> {
        return this.quoteValidatorModel.findOne().exec()
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Private methods ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    /**********************************************************************************************
     * @method findCarOfferParams
     *********************************************************************************************/
    private async findCarOfferParams(carId: number): Promise<PlanPriceParams[]> {
        const car = await this.carModel.findById(carId, {priceInPlanParams: true}).exec()
        return car.priceInPlanParams
    }
}
