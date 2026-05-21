var database = require("../database/config");

function listar() {
  console.log("ta no banco")
  var instrucaoSql = `select * from vw_midias;`;

  return database.executar(instrucaoSql);
}

function curtir(email, idMidia){
  console.log(email, idMidia)
  var instrucaoSql = `insert into curtida values(default, default, (select idUsuario from usuario where email = '${email}'), ${idMidia});`
  return database.executar(instrucaoSql);
} 

function descurtir(email, idMidia){
  console.log(email, idMidia)
  var instrucaoSql = `delete from curtida where idUsuario = (select idUsuario from usuario where email = '${email}') and idMidia = ${idMidia};`
  return database.executar(instrucaoSql);
}

function listarCurtidas(idUsuario){
  var instrucaoSql = `select idMidia from curtida where idUsuario = ${idUsuario};`
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  curtir,
  descurtir,
  listarCurtidas
};