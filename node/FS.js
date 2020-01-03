const fs = require('fs')
const files = fs.readdirSync(__dirname) 

files.forEach(f => console.log(f)) // Retorna todos os diretórios disponíveis no projeto