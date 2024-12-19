const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Server up and running!" });
});

app.use('/clientes', clienteRoutes);

module.exports = app;
