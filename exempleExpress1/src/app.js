const express = require("express");
const winston = require('winston');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/app.log' })
    ]
  })
  
const logAll = function(request, response, next) {
logger.info(`L'application a démarré : ${request.url}`)
    logger.warn('Attention, ceci est un avertissement');
    logger.error('Une erreur est survenue');
next()
}
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Middleware exécuté pour chaque requête');
    next(); // Passe la main au middleware ou à la route suivante
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static('src/public'));


app.use(logAll);
app.use('/users', userRoutes);
 
app.get("/text", (req, res, next) => {
    console.log('Middleware pour la route /text');
    next();
  }, (req, res) => {
    res.send("Hello World!");
});

    
app.get("/html", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page HTML</title>
        </head>
        <body>
        <h1>Bienvenue sur ma page HTML</h1>
        <p>Ceci est une réponse HTML envoyée par Express.js.</p>
        </body>
        </html>
        `);
    });
        
app.listen(port, () => {
    console.log(`Application à l'écoute sur le port ${port}!`);
});