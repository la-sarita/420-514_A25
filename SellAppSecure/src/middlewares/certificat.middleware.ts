import fs from 'fs';
import { config } from '../config/config';

export function loadCertificate() {
    let certificatOptions;
    try {
        certificatOptions = {
            key: fs.readFileSync(config.sslKeyPath),
            cert: fs.readFileSync(config.sslCertPath)
        };
    } catch (error) {
        console.error("Erreur lors du chargement des certificats SSL :", error);
        process.exit(1); // Arrête l'application si les certificats ne sont pas valides
    }
    return certificatOptions;
}