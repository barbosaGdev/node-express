const http = require('http') // Declara uma instância HTTP

const server = http.createServer(function(req, res) { // Cria um servidor que retorna uma pagina HTML
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end('<h1>Acho que e melhor usar o Express, não acha?</h1>')
})


const port = 8000
server.listen(port, function() { // Run server
    console.log(`Escutando a ${port}`)
})
