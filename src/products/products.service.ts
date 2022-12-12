import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../model/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async getOneProduct(id: number): Promise<Product> {
    return await this.productsRepository.findOneBy({ id });
  }

  async deleteOneProduct(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async postProduct(product: Product): Promise<void> {
    await this.productsRepository.save(product);
  }
}
