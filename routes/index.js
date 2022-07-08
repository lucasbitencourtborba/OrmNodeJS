const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoutes.js")

const routes = (app) => {
    app.use(bodyParser.json(), pessoas);
    app.get("/", (req, res) => {
        res.send("Olá!");
    })
}


module.exports = routes;