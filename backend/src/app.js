const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clienteRoutes = require('./routes/clientes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.status(200).json({ message: "Server up and running!" });
});

app.use('/api/clientes', clienteRoutes);
app.use(errorHandler);

module.exports = app;
