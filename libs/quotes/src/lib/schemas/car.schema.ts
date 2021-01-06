import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CarDocument = Car & Document

@Schema()
export class PlanPriceParams {
    @Prop() planId: number
    @Prop() fixed: number
    @Prop() permille: number
}

@Schema()
export class Car {
    @Prop() _id: number
    @Prop() brand: string
    @Prop([PlanPriceParams]) priceInPlanParams: PlanPriceParams[]
}

export const CarSchema = SchemaFactory.createForClass(Car)