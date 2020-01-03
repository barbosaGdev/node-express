console.log(global === this)
console.log(module === this)
console.log(module.exports === this) // Define o caminho de 'this' para chamar um função que indique o caminho 'module.exports'

this.digaOi = function () { // Call the function with 'this'
    console.log('Oi!!')
}