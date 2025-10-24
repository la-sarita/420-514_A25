import { injectable } from "tsyringe";
import { IProductResponse } from "../interfaces/product.interface";

@injectable()
export default class ProductService {
  async getAllProducts(): Promise<IProductResponse[]> {
    // Logique pour récupérer tous les utilisateurs
    return [{
      code: 1001,
      name: "Tomate",
      price: 2.87
    },
    {
      code: 1002,
      name: "Fraise",
      price: 4.99
    }];
    //return products?.map(product => this.formatProductResponse(product)) || [];
  }
}