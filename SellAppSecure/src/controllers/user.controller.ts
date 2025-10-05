import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { inject , injectable } from "tsyringe";

@injectable()
export class UserController {
  constructor(
    @inject("UserService") private userService: UserService
  ) {}

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void>{
    const id = Number(req.params.id);
    const user = await this.userService.getUserById(id);
    
    if (user) {
      res.json(user);
    } else {
        res.status(404).send('User not found');
    }
  }

  async getAdminData(req: Request, res: Response): Promise<void>{
    const admin = this.userService.getUserAdmin();
    
    if (admin) {
      res.json(admin);
    } else {
        res.status(404).send('User not found');
    }
  }
}