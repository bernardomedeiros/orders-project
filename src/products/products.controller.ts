import { Controller, Get, Param, ParseIntPipe  } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    // @Get()
    // findAllProducts(): string{
    //     return this.productService.findAll()
    // }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) { // usa o @Param('id') para informar que esse parametro vem da URL
        return this.productService.findById(id)
    }
}
