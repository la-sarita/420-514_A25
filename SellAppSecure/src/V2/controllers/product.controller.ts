import { Request, Response } from 'express';
import { inject, injectable } from "tsyringe";
import ProductService from '../services/product.service';
import { IProductResponse } from '../interfaces/product.interface';

@injectable()
export default class ProductController {
    constructor(
        @inject("ProductService") private productService: ProductService
    ) { }

    async getAllProducts(req: Request, res: Response) {
        const products: IProductResponse[] = await this.productService.getAllProducts();
        res.json(products);
    }
}