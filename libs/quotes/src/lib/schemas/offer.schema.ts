import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type OfferDocument = Offer & Document

@Schema()
export class PlanPrice {
    @Prop() planId: number
    @Prop() price: number
}

@Schema()
export class Offer {
    @Prop() driverAge: number
    @Prop() carId: number
    @Prop() carPrice: number
    @Prop([PlanPrice]) planPrices: PlanPrice[]
}

export const OfferSchema = SchemaFactory.createForClass(Offer)