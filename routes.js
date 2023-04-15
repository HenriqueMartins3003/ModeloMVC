const express = require('express')
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoController')

//Middleware
function meuMiddleware(req,res,next){
    req.session = {nome: 'Henrique', sobrenome: 'Martins'}
    console.log()
    console.log("Passei no seu Middleware")
    console.log()
    next()
}

//rotas da Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.formEnviado)

//rotas de Contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route

