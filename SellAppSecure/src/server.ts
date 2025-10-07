import app from './app';
import http from 'http';
import https from 'https';
import { loadCertificate } from "./middlewares/certificat.middleware";

const env = app.get('env');

console.log(`Environnement : ${env}`);

// Charger les certificats
let certificatOptions = loadCertificate();

const httpServer = http.createServer(app);

const httpsServer = https.createServer(certificatOptions, app);

export { httpServer, httpsServer };