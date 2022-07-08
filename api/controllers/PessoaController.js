const database = require('../models');

class PessoasController{
    
    static async obtemTodasPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = PessoasController;