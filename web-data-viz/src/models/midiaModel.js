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
  console.log(idUsuario)
  var instrucaoSql = `select * from curtida where idUsuario = ${idUsuario};`
  return database.executar(instrucaoSql);
}

function listarMusicasDoAlbum(idMidia){
  console.log(idMidia)
  var instrucaoSql = `select * from midia where album = ${idMidia}`
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  curtir,
  descurtir,
  listarCurtidas,
  listarMusicasDoAlbum
};