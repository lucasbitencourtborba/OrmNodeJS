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

    static async obtemPorId(req, res){
        try {
            const id = req.params.id
            const pessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoa)
        } catch (err){
            return res.status(500).json(err.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const pessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(pessoaCriada)
        } catch(err){
            return res.status(500).json(err.message)
        }
    }

    static async atualizaRegistro(req, res) {
        const id = req.params.id
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async deletaRegistro(req, res) {
        const id = req.params.id
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `ID: ${id} deletado com sucesso`})
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    static async restauraPessoa(req,res){
        const id = req.params.id
        try {
            await database.Pessoas.restore({where: {id: Number(id)}})
            return res.status(200).json({message: `ID: ${id} restaurado com sucesso`})
        } catch(err){
            res.status(500).json(err.message)
        }
    }
}

module.exports = PessoasController;