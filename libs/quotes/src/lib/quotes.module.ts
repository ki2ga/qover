import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { QuotesController } from './quotes.controller'
import { QuotesService } from './quotes.service'
import { Car, CarSchema } from './schemas/car.schema'
import { Offer, OfferSchema } from './schemas/offer.schema'
import { Plan, PlanSchema } from './schemas/plan.schema'
import { Validator, ValidatorSchema } from './schemas/validator.schema'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Car.name, schema: CarSchema },
            { name: Offer.name, schema: OfferSchema },
            { name: Plan.name, schema: PlanSchema },
            { name: Validator.name, schema: ValidatorSchema },
        ])
    ],
    controllers: [
        QuotesController,
    ],
    providers: [
        QuotesService,
    ],
    exports: [],
})
export class QuotesModule {}
