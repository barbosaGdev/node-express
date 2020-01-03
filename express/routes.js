const express = require('express')
const server = express()
const router = require('./ex05_router')

server.use('/api', router) 


server.listen(8000, () => console.log('Executando...'))