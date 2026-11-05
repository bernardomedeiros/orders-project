export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number
}

export interface Order{
    id: number,
    product: string,
    totalPrice: number,
    paymentMethod: string
}