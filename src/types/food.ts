import { ImageType } from "."

export interface FoodType{
    _id:string
    name:string
    description:string
    price:number
    score:number
    images:ImageType[]
}

export interface RestaurantType{
    _id:string
    name:string
    description:string
    price:number
    score:number
    images:ImageType[]
    address:string
}