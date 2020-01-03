// O Process é um modulo Node.js utilizado para enviar parametros a uma chamada

// COMO UTILIZAR?

// Você pode criar uma estrutura de decisão que retorna certas funções para cada tipo de parametro
// Também podemos criar uma interação com o usuário, onde ele irá poder fazer um input dentro das responses do console



function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
    console.log('Atenção Total!') // Define uma response caso o usuario declare este parâmetro
} else {
    console.log('Tranquilo')
}

process.stdout.write('Está gostando do curso? ') // Espera uma resposta do usuário após indicar um determinado param
process.stdin.on('data', function(data){
    process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`)
    process.exit()
})