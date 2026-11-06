import { Injectable } from '@nestjs/common';
import { Payment } from './dto/create-payment-dto.js';

@Injectable()
export class PaymentsService {
    private payments: Payment[]  = [
        {id: 1, orderId: 1, paymentMethod: "Money"}
    ]

    async createPayment(orderId: number, paymentMethod: string){
        const lastId = this.payments.length
        const newPayment = {id: lastId + 1, orderId: orderId, paymentMethod: paymentMethod}
        this.payments.push(newPayment)

        return "payment sucesfull"
    }

    FindAllPayments(){
        return this.payments
    }

    FindPaymentsById(id: number){
        return this.payments.find((payment) => payment.id === id)
    }
}
