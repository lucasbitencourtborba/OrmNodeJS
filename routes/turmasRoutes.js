const express = require('express')
const turmaController = require('../api/controllers/TurmaController.js')

const router = express.Router();

router
    .get('/turmas', turmaController.obtemTodasAsTurmas)

module.exports = router