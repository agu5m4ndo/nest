import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../model/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Post()
  async postProduct(@Body() producto: CreateProductDto) {
    this.productsService.postProduct(producto);
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.getOneProduct(id);
  }

  @Delete(':id')
  async deleteOneProduct(@Param('id') id: number) {
    this.productsService.deleteOneProduct(id);
  }
}
