import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service.js';
import { PaymentsService } from '../payments/payments.service.js';
import { Order } from '../types/types.js';

@Injectable()
export class OrdersService {
    private orders = [
        { id: 1, product: "Bola de Futebol", productId: 1, totalPrice: 100, paymentMethod: "Money" }
    ]

    constructor(
        private readonly productService: ProductsService,
        private readonly paymentsService: PaymentsService,
    ) { }

    async createOrder(productId: number, quantity: number, paymentMethod: string) {
        const product = this.productService.findById(productId)

        if (product !== undefined) {
            if(quantity > product.stock){
                throw new Error("Estoque indisponivel")
            }
            const totalOrder = quantity * product.price
            const lastId = this.orders.length
            const newOrder = { id: lastId + 1, product: product.name, productId: product.id, totalPrice: totalOrder, paymentMethod: paymentMethod }

            const payment = await this.paymentsService.createPayment(newOrder.id, newOrder.paymentMethod, newOrder.totalPrice)
            if(payment){
                this.orders.push(newOrder)
                return "Order created"
            }else{
                throw new Error("Payment failed")
            }
        }
    }

    findOrders() {
        return this.orders;
    }

    findOrdersById(id: number) {
        return this.orders.find((order) => order.id === id)
    }
}