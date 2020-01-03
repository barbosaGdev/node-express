const express1 = require('express')
const express2 = require('express')  // A Instância continua a mesma para express criado
console.log(express1 === express2)

const server1 = express1()
const server2 = express1();
console.log(server1 === server2)


const router1 = express1.Router()
const router2 = express1.Router(); // São reconhecidas como duas instâncias diferentes para cada 'router'
console.log(router1 === router2)