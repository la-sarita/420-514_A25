import { IUser, IUserResponse } from '../interfaces/user.interface';
import { injectable } from "tsyringe";

const users: IUser[] = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', username: 'jane.doe', password: '', role: 'admin' },
    { id: 2, name: 'Pole Prade', email: 'pole.prade@example.com', username: 'jane.doe', password: '', role: 'user' },
    { id: 3, name: "Alice Maron", email: "alice.maron@example.com", username: "alice", password: "hashed-password", role: "admin"},
    { id: 4, name: "Bob Luran", email: "bob.luran@example.com", username: "bob", password: "hashed-password", role: "user"}
];

@injectable()
export class UserService {
  async getAllUsers(): Promise<IUserResponse[]> {
    // Logique pour récupérer tous les utilisateurs
    return users?.map(user => this.formatUserResponse(user)) || [];
  }

  async findByEmail(email: string) : Promise<IUserResponse | undefined>{
    return this.getAllUsers().then(users=> users.filter(user => user.email === email)[0]);
  }

  // TODO: ajouter la logique ici
  async getUserById(userId: number): Promise<IUserResponse|undefined>{
    return this.getAllUsers().then(users => users.find(user => userId === user.id));
  }

  async getUserAdmin(): Promise<IUserResponse | undefined> {
    return this.getAllUsers().then(users => users.find(user => user.role === 'admin'));
  }

  formatUserResponse(user : IUser): IUserResponse {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.name,
      role: user.role
    }
  }
}