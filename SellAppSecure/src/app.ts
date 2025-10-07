import "./config/container";
import express from 'express';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route'
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import config from 'config';

const app = express();

// Définir les options de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple API to manage users',
    },
  },
  apis: ['./src/routes/*.ts'], // Fichier où les routes de l'API sont définies
};

// Générer la documentation à partir des options
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Servir la documentation Swagger via '/api-docs'
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

const base = config.get<string>("app.apiBasePath");

// Limiter les requêtes
app.use(rateLimit({ windowMs: 60000, max: 50 }));

app.use('/', authRoutes);
app.use(`${base}/users`, userRoutes);

// TODO: Ajouter productRoutes
// app.use(`${base}/products`, productRoutes);

// TODO: Ajouter errorMiddleware
// app.use(errorMiddleware);

export default app;