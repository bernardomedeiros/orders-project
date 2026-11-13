import { IsString, IsInt } from "class-validator";

export class OrderResponseDTO{
    @IsInt({message: 'O id precisa ser um numero'})
    id: number;

    @IsString( {message: 'O produto deve ser uma string' })
    product: string;

    @IsInt({message: 'O Preço Total precisa ser um numero'})
    totalPrice: number;

    @IsString( {message: 'O metodo de pagamento deve ser uma string' })
    paymentMethod: string;
}