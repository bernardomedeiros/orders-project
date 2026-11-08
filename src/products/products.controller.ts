import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Product } from '../types/types.js';



@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { };

    @Get()
    findAllProducts(): Product[] {
        return this.productService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Product | undefined { // usa o @Param('id') para informar que esse parametro vem da URL
        return this.productService.findById(id);
    }
}
