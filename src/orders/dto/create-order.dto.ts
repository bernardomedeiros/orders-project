import { IsString, IsInt } from "class-validator";

export class CreateOrderDto {
    @IsInt({message: 'O id precisa ser um numero'})
    id: number;
    @IsString({message: 'O produto de precisa ser uma string'})
    product: string;
    @IsInt({message: 'O id do produto precisa ser um numero'})
    productId: number;
    @IsInt({message: 'O Preço Total precisa ser um numero'})
    totalPrice: number;
    @IsInt({message: 'A auantity precisa ser um numero'})
    quantity: number;
    @IsString({message: 'O metodo de pagamento de precisa ser uma string'})
    paymentMethod: string;
}   
