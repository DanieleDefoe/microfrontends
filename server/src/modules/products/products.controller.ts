import { Controller, Get, Param } from '@nestjs/common';

import { products, Product } from 'src/product';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Array<Product>> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    return products.find((product) => product.id === parseInt(id));
  }
}
