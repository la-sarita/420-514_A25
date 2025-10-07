import bcrypt from 'bcryptjs';
import { injectable } from 'tsyringe';
import { JWT_SECRET } from '../utils/jwt';
import { IUser, IUserPayload } from '../interfaces/user.interface';
import { signToken } from '../middlewares/auth.middleware';

const users: IUser[] = [];

@injectable()
export class AuthService {

  async register(userBody: IUser) {
    const hashedPassword = await bcrypt.hash(userBody.password, 10);
    const user: IUser = {
      ...userBody,
      id: users.length + 1,
      password: hashedPassword
    };

    users.push(user);
    return user;
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await users?.find(user => user.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { id: user.id, email: user.email, role: user.role };
      return signToken(payload);
    }
    return null;
  }


}
