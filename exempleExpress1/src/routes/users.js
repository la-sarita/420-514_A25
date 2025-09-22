const express = require('express');
const router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
  res.send('Liste des utilisateurs');
});

// Route pour récupérer un utilisateur par ID
router.get('/:id', (req, res) => {
  res.send(`Utilisateur avec ID ${req.params.id}`);
});

module.exports = router;