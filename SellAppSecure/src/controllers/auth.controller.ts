import { Request, Response } from 'express';
import { AuthService } from "../services/auth.service";
import { container, injectable } from "tsyringe";
import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/user.interface';

let users: IUser[] = []; // Simuler une base de données en mémoire

@injectable()
export class AuthController {
    private authService: AuthService;

    constructor()
    {
        this.authService = container.resolve<AuthService>("AuthService");
    }

    async register(req: Request, res: Response){
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user: IUser = { 
            id: req.body.id,
            name: req.body.name, 
            email: req.body.email, 
            username: req.body.username, 
            role: req.body.role,
            password: hashedPassword 
        };
        
        users.push(user);
        res.status(201).send('Utilisateur enregistré');
    }

    async login(req: Request, res: Response){
        const accessToken = await this.authService.login(req.body.email, await bcrypt.hash(req.body.password, 10));
        
        if (accessToken) {
            res.json({ accessToken });
        } else {
            res.status(401).send('Nom d’utilisateur ou mot de passe incorrect');
        }
    }
}