export class CreateOrderDto {
    id: number;
    product: string;
    productId: number;
    totalPrice: number;
    quantity: number;
    paymentMethod: string;
}   
