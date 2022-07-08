const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index.js');
const app = express();

app.use(bodyParser.json());

const port = 3000;

routes(app);

app.listen(port, () => {console.log(`Servidor escutando na porta ${port}`)});

module.exports = app;