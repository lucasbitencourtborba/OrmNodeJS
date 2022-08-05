const express = require('express');
const PessoaController = require('../api/controllers/PessoaController.js')

const router = express.Router();

router
    .get('/pessoas', PessoaController.obtemTodasPessoas)
    .get('/pessoas/:id', PessoaController.obtemPorId)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaRegistro)
    .delete('/pessoas/:id', PessoaController.deletaRegistro)
module.exports = router