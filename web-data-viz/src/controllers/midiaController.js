var midiaModel = require("../models/midiaModel");

function listar(req, res) {
  midiaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  })
}

function curtir(req, res) {

  var email = req.body.emailServer
  var idMidia = req.body.idMidiaServer

  midiaModel.curtir(email, idMidia).then((resultado) => {
    res.json(resultado);
  })
}

function descurtir(req, res) {

  var email = req.body.emailServer
  var idMidia = req.body.idMidiaServer

  midiaModel.descurtir(email, idMidia).then((resultado) => {
    res.json(resultado);
  })
}

function listarCurtidas(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  midiaModel.listarCurtidas(idUsuario).then((resultado) => {
    res.json(resultado);
  })
}

function listarMusicasDoAlbum(req, res){
  var idMidia = req.body.idAlbumServer;
  midiaModel.listarMusicasDoAlbum(idMidia).then((resultado) => {
    res.json(resultado);
  })
}

module.exports = {
  listar,
  curtir,
  descurtir,
  listarCurtidas,
  listarMusicasDoAlbum
}