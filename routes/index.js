var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  const regIntegrantes = await global.db.consultaIntegrantes()
  res.render('homePage', { integrantes: regIntegrantes });

});

router.get('/alterarIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const integrante = await global.db.consultaIntegrante(codigo)
  res.render('manutencaoIntegrantes', {acao: '/updateIntegrante/' + codigo, integrante})
});

router.get('/cadastrarIntegrante', function(req, res){
  res.render('manutencaoIntegrantes', {acao: '/salvarIntegrante', integrante:{}});
});

router.get('/excluirIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  await global.db.excluirIntegrante({codigo});
  res.redirect('/');
});

router.get('/cadastrarProjeto', function(req, res){
  res.render('manutencaoProjetos', {acao: '/salvarProjeto', projeto:{}});
});

router.post('/salvarIntegrante', async function(req, res){
  const nome = req.body.edtNome
  const email = req.body.edtEmail
  const telefone = req.body.edtTelefone
  const senha = req.body.edtSenha
  
  await global.db.saveIntegrante({nome, email, telefone, senha});
  res.redirect('/');
})

router.post('/salvarProjeto', async function(req, res){
  const nomeProjeto = req.body.edtNomeProjeto
  const logradouro = req.body.edtLogradouro
  const bairro = req.body.edtBairro
  const municipio = req.body.edtMunicipio
  const dataInicio = parseInt(req.body.edtDataInicio)
  const gastoEstimado = parseFloat(req.body.edtGastoEstimado)

  await global.db.saveProjeto({nomeProjeto, logradouro, bairro, municipio, dataInicio, gastoEstimado});
});

router.post('/updateIntegrante/:id', async function(req, res){
  const codigo = parseInt(req.params.id)
  const nome = req.body.edtNome
  const email = req.body.edtEmail
  const telefone = req.body.edtTelefone
  const senha = req.body.edtSenha

  await global.db.updateIntegrante({nome, email, telefone, senha, codigo});
  res.redirect('/');
})

module.exports = router;
