import "reflect-metadata";
import { container } from "tsyringe";
import { UserService } from "../V2/services/user.service";
import { AuthService } from "../V2/services/auth.service";
import ProductService from "../V2/services/product.service";

// Enregistrer les services
container.register("UserService", { useClass: UserService });
container.register("AuthService", { useClass: AuthService });
container.register("ProductService", { useClass: ProductService });

