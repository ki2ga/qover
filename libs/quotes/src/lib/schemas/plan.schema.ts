import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PlanDocument = Plan & Document

@Schema()
export class Plan {
    @Prop() _id: number
    @Prop() name: string
    @Prop() maxTravelDays: number
    @Prop() medicalCoverage: number
    @Prop() personalAsistance: number
    @Prop() travelAsistance: number
    @Prop() durationYears: number
}

export const PlanSchema = SchemaFactory.createForClass(Plan)