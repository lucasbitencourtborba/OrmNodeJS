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

    static async obtemPorId(req, res) {
        try{
            const id = req.params.id
            const turma = await database.Turmas.findOne({where: {id: number(id)}})
        } catch(err){
            res.status(500).json(err.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const TurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurma)
        } catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async atualizaTurma(req, res){
        const atualizacao = req.body
        const id = req.params.id
        try{
            const atualiza = await database.Turmas.update(atualizacao, {where: {id: number(id)}})
            const turmaAtualizada = await database.findOne({where: {id: number(id)}})
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async excluiTurma(req, res) {
        const id = req.params.id
        try{

        }catch(err){

        }
    }
}

module.exports = turmaController;