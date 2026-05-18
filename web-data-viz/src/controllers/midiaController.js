var midiaModel = require("../models/midiaModel");

function listar(req, res) {
  midiaModel.listar().then((resultado) => {
    console.log("entrou no controle");
    res.status(200).json(resultado);
  })
}

module.exports = {
  listar
}