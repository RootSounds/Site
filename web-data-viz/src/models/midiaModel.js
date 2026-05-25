var database = require("../database/config");

function listar() {
  console.log("ta no banco")
  var instrucaoSql = `select * from vw_midias;`;

  return database.executar(instrucaoSql);
}

function curtir(email, idMidia) {
  var instrucaoSql = `insert into curtida values(default, default, (select idUsuario from usuario where email = '${email}'), ${idMidia});`
  return database.executar(instrucaoSql);
}

function descurtir(email, idMidia) {
  var instrucaoSql = `delete from curtida where idUsuario = (select idUsuario from usuario where email = '${email}') and idMidia = ${idMidia};`
  return database.executar(instrucaoSql);
}

function listarCurtidas(idUsuario) {
  var instrucaoSql = `select * from curtida where idUsuario = ${idUsuario};`
  return database.executar(instrucaoSql);
}

function listarMusicasDoAlbum(idMidia) {
  var instrucaoSql = `select * from midia where album = ${idMidia}`
  return database.executar(instrucaoSql);
}

function listarTodas() {
  var instrucaoSql = `select * from midia;`
  return database.executar(instrucaoSql);
}

function criarMidia(tipo, titulo, lancamento, duracao, capa, idUsuario, album) {
  if (tipo == "album") {
    var instrucaoSql = `insert into midia(idMidia, titulo, dataLancamento, tipo, album, capa, duracao) values(default, '${titulo}','${lancamento}', '${tipo}', null, '${capa}', '${duracao}');`
    database.executar(instrucaoSql);
    setTimeout(() => {
      var instrucaoSql = `insert into midia_usuario(idMidia, idUsuario) values((select max(idMidia) from midia), ${idUsuario});`
      return database.executar(instrucaoSql);
    }, 100)
  }
  else {
    var instrucaoSql = `insert into midia(idMidia, titulo, dataLancamento, tipo, album, capa, duracao) values(default, '${titulo}','${lancamento}', '${tipo}', (select idMidia from (select idMidia from midia where titulo = '${album}') as temp), '${capa}', '${duracao}');`
    database.executar(instrucaoSql);
    setTimeout(() => {
      var instrucaoSql = `insert into midia_usuario(idMidia, idUsuario) values((select max(idMidia) from midia), ${idUsuario});`
      return database.executar(instrucaoSql);
    }, 100)
  }
}

module.exports = {
  listar,
  curtir,
  descurtir,
  listarCurtidas,
  listarMusicasDoAlbum,
  listarTodas,
  criarMidia
};