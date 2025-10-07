import { httpServer, httpsServer } from './server';
import config from 'config';
import { ServerCfg } from './config/config.type';
import { Server } from 'http';

let protocol = "http";
const host = "localhost";
const cfg = config.get<ServerCfg>('server');
let port = cfg.http.port;

let server: Server<any> = httpServer;

console.log((cfg.https.enabled));
if (cfg.https.enabled && httpsServer) {
  port = cfg.https.port;
  server = httpsServer;
  protocol = "https";
}

// Démarrage des serveurs
server.listen(port, () =>
  console.log(`Serveur en écoute sur  : ${protocol}://${host}:${port}`)
);
