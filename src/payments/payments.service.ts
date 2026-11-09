import { Injectable } from '@nestjs/common';
import { Payment } from './dto/create-payment.dto.js';

@Injectable()
export class PaymentsService {
    private payments: Payment[]  = [
        {id: 1, orderId: 1, paymentMethod: "Money", totalPrice: 300}
    ];

    async createPayment(orderId: number, paymentMethod: string, totalPrice: number){
        const lastId = this.payments.length;
        const newPayment = {id: lastId + 1, orderId: orderId, paymentMethod: paymentMethod, totalPrice: totalPrice};
        this.payments.push(newPayment);

        return "payment sucesfull";
    }

    findAllPayments(){
        return this.payments;
    }

    findPaymentsById(id: number){
        return this.payments.find((payment) => payment.id === id);
    }
}
