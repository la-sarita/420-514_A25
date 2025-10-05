import NodeRSA from 'node-rsa';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; 
import { injectable } from 'tsyringe';
import { JWT_SECRET } from '../utils/jwt';
import { IUser } from '../interfaces/user.interface';

const users: IUser[] = [
  { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', username: 'jane.doe', password: '', role: 'admin' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', username: 'jane.doe', password: '', role: 'user' }
];

@injectable()
export class AuthService {

  async login(email: string, password: string): Promise<string | null> {
    const user = await users?.filter(user => user.email === email)[0];
    console.log(user);
    // console.log(password, " ==? ", user?.password);
    // console.log(bcrypt.compare(password, user ? user.password: ''));
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
      return token;
    }
    return null;
  }

  verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
  }
}

const key = new NodeRSA({ b: 512 });
const publicKey = key.exportKey('public');
const privateKey = key.exportKey('private');

export { key };