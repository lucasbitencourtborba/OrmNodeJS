const database = require('../models')

class turmaController {
    static async obtemTodasAsTurmas(req, res) {
        try{
            const todasAsTurmas = database.Turmas.findAll();
            res.status(200).json(todasAsTurmas)
        }catch(err){
            res.status(500).json(err.message)
        }
    }
}