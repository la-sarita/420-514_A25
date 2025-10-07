import jwt from 'jsonwebtoken';

export const JWT_SECRET = 'votre_secret_pour_signer_les_jwt';

export function verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}