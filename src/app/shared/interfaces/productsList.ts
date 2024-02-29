import { Product } from "./product"

export interface ProductsList {
    products: Product[]
    total: number,
    skip: number,
    limit: number
}
