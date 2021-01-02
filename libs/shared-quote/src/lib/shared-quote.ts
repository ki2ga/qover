export interface ICar {
    carId: number
    carName: string
}

export interface IQuoteValidator {
    minAge: number
    minPrice: number
    minAgePerCar: {[catId: number]: number}
}

export interface ISubmitQuote {
    driverAge: number
    carId: number
    carPrice: number
}

export interface IPlan {
    planId: number
    name: string
    maxTravelDays: number
    medicalCoverage: number
    personalAsistance: number
    travelAsistance: number
    durationYears: number
}

export interface IOffer {
    [planId: number]: number
}

export enum EQuoteValidator {OK, AGE, PRICE, OTHER}

export function validateQuote(quote: ISubmitQuote, validator: IQuoteValidator) {
    if (quote.carPrice < validator.minPrice) return EQuoteValidator.PRICE
    if (quote.driverAge < validator.minAge) return EQuoteValidator.AGE
    if (quote.driverAge < (validator.minAgePerCar[quote.carId] ?? 0)) return EQuoteValidator.OTHER
    return EQuoteValidator.OK
}