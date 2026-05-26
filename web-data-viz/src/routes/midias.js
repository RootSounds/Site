var express = require("express");
var router = express.Router();

var midiaController = require("../controllers/midiaController");

router.post("/cadastrar", function (req, res) {
  midiaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  midiaController.listar(req, res);
});

router.post("/curtir", function(req, res){
  midiaController.curtir(req, res);
});

router.delete("/descurtir", function(req, res){
  midiaController.descurtir(req, res);
});

router.post("/listarCurtidas", function(req, res){
  midiaController.listarCurtidas(req, res);
});

router.post("/listarMusicasDoAlbum", function(req, res){
  midiaController.listarMusicasDoAlbum(req, res);
});

router.get("/listarTodas", function(req, res){
  midiaController.listarTodas(req, res);
});

router.post("/criarMidia", function(req, res){
  midiaController.criarMidia(req, res);
});

router.get("/musicaMaisCurtida", function(req, res){
  midiaController.musicaMaisCurtida(req, res);
})

router.get("/albumMaisCurtido", function(req, res){
  midiaController.albumMaisCurtido(req,res);
})

module.exports = router;