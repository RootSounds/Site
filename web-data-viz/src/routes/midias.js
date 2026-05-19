var express = require("express");
var router = express.Router();

var midiaController = require("../controllers/midiaController");

router.post("/cadastrar", function (req, res) {
  midiaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  console.log("entrou no route");
  midiaController.listar(req, res);
});

router.post("/curtir", function(req, res){
  console.log("entrou no route");
  midiaController.curtir(req, res);
});

router.delete("/descurtir", function(req, res){
  console.log("entrou no route");
  midiaController.descurtir(req, res);
});

module.exports = router;