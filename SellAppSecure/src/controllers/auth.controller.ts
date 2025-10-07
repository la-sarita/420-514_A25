import { Request, Response } from 'express';
import { AuthService } from "../services/auth.service";
import { container, injectable } from "tsyringe";
import { IUser } from '../interfaces/user.interface';
import { users } from '../data/users';

@injectable()
export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = container.resolve<AuthService>("AuthService");
    }

    async register(req: Request, res: Response) {
        const user: IUser = await this.authService.register(req.body);

        users.push(user);
        res.status(201).send('Utilisateur enregistré');
    }

    async login(req: Request, res: Response) {
        const accessToken = await this.authService.login(req.body.email, req.body.password);

        if (accessToken) {
            res.json({ accessToken });
        } else {
            res.status(401).send('Nom d’utilisateur ou mot de passe incorrect');
        }
    }

    home(req: Request, res: Response) {
        res.send('Hello, TypeScript with Express! Connexion sécurisée.');
    }
}