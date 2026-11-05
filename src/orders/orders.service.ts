import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service.js';
import { Order } from '../types/types.js';

@Injectable()
export class OrdersService {
    private orders = [
        {id: 1, product: "Bola de Futebol", totalPrice: 100, paymentMethod: "Money"}
    ]

    constructor(private readonly productService: ProductsService) {}

    createOrder(productId: number, quantity: number, paymentMethod: string) {
        const product = this.productService.findById(productId)
        if (product !== undefined) {
            const totalOrder = quantity * product.price
            const lastId = this.orders.length
            const newOrder = { id: lastId + 1, product: product.name, totalPrice: totalOrder, paymentMethod: paymentMethod }

            this.orders.push(newOrder)

            return "ok"
        }
    }

    findOrders() {
        return this.orders;
    }

    findOrdersById(id: number) {
        return this.orders.find((order) => order.id === id)
    }
}