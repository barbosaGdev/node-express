
const _ = require('lodash') // Import a lodash package

const alunos = [{
    nome: 'Joao',
    nota: 7.6
}, {
    nome: 'Ana',
    nota: 8.6

}, {
    nome: 'Maria',
    nota: 4.6
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)