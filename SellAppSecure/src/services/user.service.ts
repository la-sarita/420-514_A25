import { IUser, IUserResponse } from '../interfaces/user.interface';
import { injectable } from "tsyringe";
import { users } from '../data/users';


@injectable()
export class UserService {
  async getAllUsers(): Promise<IUserResponse[]> {
    // Logique pour récupérer tous les utilisateurs
    return users?.map(user => this.formatUserResponse(user)) || [];
  }

  async findByEmail(email: string): Promise<IUserResponse | undefined> {
    return this.getAllUsers().then(users => users.filter(user => user.email === email)[0]);
  }

  // TODO: ajouter la logique ici
  async getUserById(userId: number): Promise<IUserResponse | undefined> {
    return this.getAllUsers().then(users => users.find(user => userId === user.id));
  }

  async getUserAdmin(): Promise<IUserResponse | undefined> {
    return this.getAllUsers().then(users => users.find(user => user.role === 'admin'));
  }

  formatUserResponse(user: IUser): IUserResponse {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.name,
      role: user.role
    }
  }
}