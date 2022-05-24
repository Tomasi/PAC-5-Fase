/* GET home page. */
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res) {
  const integrantes = await global.db.consultaIntegrantes()
  const projetos = await global.db.consultaProjetos()

  res.render('homePage', { projetos, integrantes });
});

router.get('/cadastrarIntegrante', function(req, res){
  res.render('manutencaoIntegrantes', {acao: '/salvarIntegrante', integrante:{}});
});

router.get('/alterarIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const integrante = await global.db.consultaIntegrante(codigo)
  res.render('manutencaoIntegrantes', {acao: '/updateIntegrante/' + codigo, integrante})
});

router.get('/excluirIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  await global.db.excluirIntegrante({codigo});
  res.redirect('/');
});

router.post('/salvarIntegrante', async function(req, res){
  const nome = req.body.edtNome
  const email = req.body.edtEmail
  const telefone = req.body.edtTelefone
  const senha = req.body.edtSenha
  
  await global.db.saveIntegrante({nome, email, telefone, senha});
  res.redirect('/');
})

router.post('/updateIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const nome = req.body.edtNome
  const email = req.body.edtEmail
  const telefone = req.body.edtTelefone
  const senha = req.body.edtSenha

  await global.db.updateIntegrante({nome, email, telefone, senha, codigo});
  res.redirect('/');
})

router.get('/cadastrarProjeto', function(req, res){
  res.render('manutencaoProjetos', {acao: '/salvarProjeto', projeto:{}});
});

router.get('/alterarProjeto/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const projeto = await global.db.consultaProjeto(codigo)
  res.render('manutencaoProjetos', {acao: '/updateProjeto/' + codigo, projeto})
});

router.get('/excluirProjeto/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  await global.db.excluirProjeto({codigo});
  res.redirect('/');
});

router.post('/salvarProjeto', async function(req, res){
  const nomeProjeto = req.body.edtNomeProjeto
  const logradouro = req.body.edtLogradouro
  const bairro = req.body.edtBairro
  const municipio = req.body.edtMunicipio

  let dataInicio = 0
  if (!isNaN(parseInt(req.body.edtDataInicio))) {
    dataInicio = parseInt(req.body.edtDataInicio)
  }

  let gastoEstimado = 0
  if (!isNaN(parseFloat(req.body.edtGastoEstimado))){
    console.log("Nan")
    gastoEstimado = parseFloat(req.body.edtGastoEstimado)
  }

  await global.db.saveProjeto({nomeProjeto, logradouro, bairro, municipio, dataInicio, gastoEstimado});
  res.redirect('/');
});

router.post('/updateProjeto/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const nome = req.body.edtNomeProjeto
  const logradouro = req.body.edtLogradouro
  const bairro = req.body.edtBairro
  const municipio = req.body.edtMunicipio

  let dataInicio = 0
  if (!isNaN(parseInt(req.body.edtDataInicio))) {
    console.log("Nan")
    dataInicio = parseInt(req.body.edtDataInicio)
  }

  let gastoEstimado = 0
  if (!isNaN(parseFloat(req.body.edtGastoEstimado))){
    console.log("Nan")
    gastoEstimado = parseFloat(req.body.edtGastoEstimado)
  }

  await global.db.updateProjeto({nome, logradouro, bairro, municipio, dataInicio, gastoEstimado, codigo});
  res.redirect('/');
})

router.get('/lancarMovimentos/:id', function(req, res){
  const tipos = global.db.consultaTiposMovimento()
  const codigo = parseInt(req.params.id)
  res.render('lancamentoDeMovimentos', {acao: '/saveMovimentos/'+ codigo, movimentos:{}, tipos: tipos})
}); 

router.post('/saveMovimentos/:id', async function(req, res){
  const nome = req.body.edtNome
  const responsavel = req.body.edtResponsavel
  const data = req.body.edtData
  const valor = req.body.edtValor
  const tipo = req.body. edtTipo
  const codigo = parseInt(req.params.id)

  await global.db.saveMovimentos({nome, responsavel, data, valor, tipo, codigo});
  res.redirect('/');
})

router.get('/excluirMovimento/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  await global.db.excluirMovimento({codigo});
  res.redirect('/');
});

router.get('/gerarEstratificacao/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const movimentos = await global.db.consultaMovimentos(codigo);
  res.render('estratificacao', {acao: '/estratificacao', movimentos})
})

module.exports = router;