import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {id: 1, name: "Bola de Futebol", price: 20.0, stock: 200},
        {id: 2, name: "Camisa de Time", price: 40.0, stock: 200},
        {id: 3, name: "Chuteira", price: 60.0, stock: 200}
    ];

    findAll(){
        return this.products;
    }

    findById(id: number){
        return this.products.find((product) => product.id === id);
    }

    updateProduct(productId: number, quantity: number){
        const product = this.products.find((product) => product.id === productId);
        if(product?.stock !== undefined){
            product.stock - quantity;
            return "Product stock has been changed"
        }
    }

}
