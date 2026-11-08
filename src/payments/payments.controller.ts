import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service.js';
import { Payment } from './dto/create-payment.dto.js';

@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentService: PaymentsService
    ) {}

    @Get()
    getAllPayments() {
        return this.paymentService.FindAllPayments();
    }

    @Get(':id')
    getPaymentById(@Param('id', ParseIntPipe) id: number): Payment | undefined {
        return this.paymentService.FindPaymentsById(id);
    }
}
