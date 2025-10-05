import "reflect-metadata";
import { container } from "tsyringe";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

// Enregistrer les services
container.register("UserService", { useClass: UserService });
container.register("AuthService", { useClass: AuthService });
