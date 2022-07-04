import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json());

const port = 3000;


app.get('/teste', (req, res) => {
    res.status(200).send({mensagem: "Aplicação rodando"})
})

app.listen(port, () => {console.log(`Servidor escutando na porta ${port}`)})

export default app;