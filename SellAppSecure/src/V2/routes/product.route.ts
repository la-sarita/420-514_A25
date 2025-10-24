import { Router } from 'express';
import { container } from "tsyringe";
import ProductController from '../controllers/product.controller';

const router = Router();

const controller = container.resolve(ProductController);

router.get('/', controller.getAllProducts.bind(controller));

export default router;