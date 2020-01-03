const utils = require('./ex02'); // Import module to use your functions
const modulo = require('./ex03'); // Import module to use a 'this' attribute
const moduloComoParam = require('./param') // Import module to pass any params

console.log(utils.upper('show de bola!')); // Call a function and return a params

console.log(global.obj.name) // Call a global function
console.log(obj.name) 

moduloComoParam('Yep') // Send a param to a function and return the response with then
