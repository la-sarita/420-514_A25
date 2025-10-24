import express from 'express';
import config from 'config';

import userRoutesV1 from '../V1/routes/user.route';

import userRoutesV2 from '../V2/routes/user.route';
import authRoutes from '../V2/routes/auth.route';
import productRoutes from '../V2/routes/product.route';


const app = express();

const routes = {
    auth: {
        name: 'auth',
        versions: {
            v2: authRoutes
        }
    },
    users: {
        name: 'users',
        versions: {
            v1: userRoutesV1,
            v2: userRoutesV2,
        }
    },
    products: {
        name: 'products',
        versions: {
            v2: productRoutes
        }
    }
}

for (const [_, infos] of Object.entries(routes)) {
    for (const [version, route] of Object.entries(infos.versions)) {
        const base = `${config.get<string>("app.apiBasePath")}/${version}`;
        app.use(`${base}/${infos.name}`, route);
        console.log(`Clé : ${version}, Valeur : ${base}/${infos.name}`);
    }
}

// TODO: Ajouter productRoutes
// app.use(`${ base } / ${ routes.products.name }`, routes.products.versions[version]);


export default app;