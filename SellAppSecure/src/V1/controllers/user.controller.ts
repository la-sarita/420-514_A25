import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {
  constructor(
    @inject("UserService") private userService: UserService
  ) { }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const user = await this.userService.getUserById(id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
    return;
  }

  async getAdminData(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>> {
    try {
      const admin = await this.userService.getUserAdmin();

      if (admin) {
        return res.status(200).json(admin);
      } else {
        return res.status(401).send('Accès interdit');
      }
    } catch (error) {
      return next(error);
    }
  }
}