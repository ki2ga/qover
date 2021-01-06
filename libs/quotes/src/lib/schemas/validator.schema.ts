import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ValidatorDocument = Validator & Document

@Schema()
export class PerCar {
    @Prop() carId: number
    @Prop() minAge: number
}

@Schema()
export class Validator {
    @Prop() minAge: number
    @Prop() minPrice: number
    @Prop([PerCar]) customPerCar: PerCar[]
}

export const ValidatorSchema = SchemaFactory.createForClass(Validator)