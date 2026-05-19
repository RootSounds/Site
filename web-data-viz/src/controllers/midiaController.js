var midiaModel = require("../models/midiaModel");

function listar(req, res) {
  midiaModel.listar().then((resultado) => {
    console.log("entrou no controle");
    res.status(200).json(resultado);
  })
}

function curtir(req, res) {

  var email = req.body.emailServer
  var idMidia = req.body.idMidiaServer

  midiaModel.curtir(email, idMidia).then((resultado) => {
    console.log("entrou no controle");
    res.json(resultado);
  })
}

function descurtir(req, res) {

  var email = req.body.emailServer
  var idMidia = req.body.idMidiaServer

  midiaModel.descurtir(email, idMidia).then((resultado) => {
    console.log("entrou no controle");
    res.json(resultado);
  })
}

module.exports = {
  listar,
  curtir,
  descurtir
}