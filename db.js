const mysql = require('mysql2/promise')

async function conectarBD()
{
    if (global.connection && global.connection.state !== 'disconnected')
    {
        return global.connection
    }

    const connection = await mysql.createConnection(
        {
            host     : 'localhost',
            port     : 3306,
            user     : 'root',
            password : '',
            database : 'PAC'
        }
    );

    global.connection = connection
    return global.connection
}

async function consultaIntegrantes(){
    const conexao = await conectarBD()
    const [registros] = await conexao.query("select * from integrante;")
    return registros
}

async function consultaIntegrante(codigo){
    const conexao = await conectarBD()
    const sql = "select * from integrante where int_codigo = (?);"
    const [integrantes] = await conexao.query(sql, [codigo])
    return integrantes[0]
}

async function saveIntegrante(integrante){
    const conexao = await conectarBD()
    const sql = "insert into integrante (int_nome, int_senha, int_email, int_telefone) values (?,?,?,?);"
    return await conexao.query(sql, [integrante.nome, integrante.senha, integrante.email, integrante.telefone])
}

async function updateIntegrante(integrante){
    const conexao = await conectarBD()
    const sql = "update integrante set int_nome = (?), int_senha = (?), int_email = (?), int_telefone = (?) where int_codigo = (?);"
    return await conexao.query(sql, [integrante.nome, integrante.senha, integrante.email, integrante.telefone, integrante.codigo]);
}

async function excluirIntegrante(integrante){
    const conexao = await conectarBD();
    const sql = "delete from integrante where int_codigo = (?);"
    return await conexao.query(sql, [integrante.codigo]);
}

async function saveProjeto(projeto){
    const conexao = await conectarBD();
    const sql = "insert into projeto (proj_nome, proj_logradouro, proj_bairro, proj_municipio, proj_data_inicio, proj_gasto_estimado) values (?,?,?,?,?,?);"
    return await conexao.query(sql, [projeto.nomeProjeto, projeto.logradouro, projeto.bairro, projeto.municiopio, projeto.dataInicio, projeto.gastoEstimado]);
}
  
module.exports = { saveIntegrante, consultaIntegrantes, consultaIntegrante, updateIntegrante, excluirIntegrante, saveProjeto }