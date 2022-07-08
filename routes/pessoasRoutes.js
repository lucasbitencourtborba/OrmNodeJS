const express = require('express');
const PessoaController = require('../api/controllers/PessoaController.js')

const router = express.Router();

router
    .get('/pessoas', PessoaController.obtemTodasPessoas)

module.exports = router