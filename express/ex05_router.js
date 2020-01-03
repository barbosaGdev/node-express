// Este arquivo é uma Middleware

// Ele faz uso de uma função Router do express, que serve para retornar rotas.

// Por padrão, as funções recebem 3 params

// REQ -> São dados que estão sendo recebidos
// RES -> É a resposta que irá retornar ao user
// NEXT -> Função que chama a próxima na cadeia


const express = require('express') 
const router = express.Router();

router.use((req,res,next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now - init} ms.`)
})

router.get('/produtos/:id', (req,res) => {
    res.json({id: req.params.id, name: 'Caneta'}) // req.params.name -> Pega o que foi passado na rota pelo user e retorna
})

router.get('/clientes/:id/:name', (req,res) => {
    res.json({id: req.params.id, name: req.params.name})
})

module.exports = router // Exporta todas as rotas definidas com 'router'