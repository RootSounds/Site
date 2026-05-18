var database = require("../database/config");

function listar() {
  console.log("ta no banco")
  var instrucaoSql = `SELECT * FROM midia;`;

  return database.executar(instrucaoSql);
}

module.exports = {
  listar
};