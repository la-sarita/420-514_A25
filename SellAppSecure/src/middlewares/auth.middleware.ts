import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/jwt';
import { IUserPayload } from '../interfaces/user.interface';
import 'express';

export const signToken = (payload: IUserPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Middleware pour vérifier le JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Accès refusé. Aucun token fourni.' });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1] || "";

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IUserPayload;
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide.' });
  }
};