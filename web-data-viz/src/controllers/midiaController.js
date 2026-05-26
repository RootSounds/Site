const { response } = require("express");
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

function listarMusicasDoAlbum(req, res) {
  var idMidia = req.body.idAlbumServer;
  midiaModel.listarMusicasDoAlbum(idMidia).then((resultado) => {
    res.json(resultado);
  })
}

function listarTodas(req, res) {
  midiaModel.listarTodas().then((resultado) => {
    res.json(resultado);
  })
}

function criarMidia(req, res) {
  var titulo = req.body.tituloServer;
  var tipo = req.body.tipoServer;
  var lancamento = req.body.lancamentoServer;
  var duracao = req.body.duracaoServer;
  var capa = req.body.capaServer;
  var idUsuario = req.body.idUsuarioServer;
  var album = req.body.albumServer

  midiaModel.criarMidia(tipo, titulo, lancamento, duracao, capa, idUsuario, album).then((resultado) => {
    res.json(resultado);
  })
}

function musicaMaisCurtida(req, res) {
  midiaModel.musicaMaisCurtida().then((resultado) => {
    res.json(resultado);
  })
}

function albumMaisCurtido(req, res){
  midiaModel.albumMaisCurtido().then((resultado) =>{
    res.json(resultado);
  })
}

module.exports = {
  listar,
  curtir,
  descurtir,
  listarCurtidas,
  listarMusicasDoAlbum,
  listarTodas,
  criarMidia,
  musicaMaisCurtida,
  albumMaisCurtido
}