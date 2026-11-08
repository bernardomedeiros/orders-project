import { Body, Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { Order } from '../types/types.js';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto){
        const { productId, quantity, paymentMethod } = createOrderDto
        const orderCreated = await this.ordersService.createOrder(productId, quantity, paymentMethod)

        return {
            message: "order created",
            orderCreated
        }
    }

    @Get()
    findAllOrders(): Order[] {
        return this.ordersService.findOrders()
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Order | undefined {
        return this.ordersService.findOrdersById(id)
    }
}
