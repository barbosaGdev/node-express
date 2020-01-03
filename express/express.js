const express = require('express') // Import a express package
const server = express() // Define server como uma instância Express

server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo Cliente'))
    .put((req, res) => res.send('Altera Cliente'))
    .delete((req, res) => res.send('Remove Cliente')) // Cria uma rota padrão que possui diferentes tipos de chamadas:

    // GET -> Seleciona e retorna um dado cadastrado
    // POST -> Cadastra um novo dado
    // PUT -> Atualiza um dado cadastrado
    // DELETE -> Exclui um dado
 
   

server.listen(8000, () => console.log('Executando...')) // Run server