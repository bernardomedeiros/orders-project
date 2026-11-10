import { Body, Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { OrderResponseDTO } from './dto/order-response.dto.js';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto){
        const { productId, quantity, paymentMethod } = createOrderDto;
        const orderCreated = await this.ordersService.createOrder(productId, quantity, paymentMethod);

        return {
            message: "order created",
            orderCreated
        };
    }

    @Get()
    findAllOrders(): OrderResponseDTO[] {
        return this.ordersService.findOrders();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): OrderResponseDTO | undefined {
        return this.ordersService.findOrdersById(id);
    }
}
