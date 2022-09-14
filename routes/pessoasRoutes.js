const express = require('express');
const PessoaController = require('../api/controllers/PessoaController.js')

const router = express.Router();

router
    .get('/pessoas', PessoaController.obtemTodasPessoas)
    .get('/pessoas/:id', PessoaController.obtemPorId)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaRegistro)
    .delete('/pessoas/:id', PessoaController.deletaRegistro)
    .post('/pessoas/:id', PessoaController.restauraPessoa)
    //.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
    //.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    //.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
    //.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
module.exports = router