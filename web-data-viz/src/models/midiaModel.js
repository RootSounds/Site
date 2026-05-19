var database = require("../database/config");

function listar() {
  console.log("ta no banco")
  var instrucaoSql = `select * from midia where (album is null and tipo = 'album') or (album is null and tipo = 'musica');`;

  return database.executar(instrucaoSql);
}

module.exports = {
  listar
};