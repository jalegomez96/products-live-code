export interface Product {
    id: number
    title: string | null
    description: string | null
    price: number | null
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}
