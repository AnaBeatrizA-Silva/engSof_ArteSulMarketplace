const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'ArteSul API' });
});

app.get('/api/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Escultura em Madeira', preco: 150.0, regiao: 'Sul' },
    { id: 2, nome: 'Vaso de Cerâmica Artesanal', preco: 85.0, regiao: 'Sul' }
  ]);
});

module.exports = app;