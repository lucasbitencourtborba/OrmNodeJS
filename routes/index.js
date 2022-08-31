const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoutes.js")
const turmas = require("./turmasRoutes.js")

const routes = (app) => {
    app.use(bodyParser.json(), pessoas);
    app.use(bodyParser.json(), turmas);

//    app.get("/", (req, res) => {
//        res.send("Olá!");
//    })

}


module.exports = routes;