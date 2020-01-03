function upper(text) {
    return text.toUpperCase(); // Recebe um parametro vindo de outro arquivo e realiza uma ação (FONTES GRANDES)
}

module.exports = { upper } // Exportar a função para ser utilizada em outros arquivos

global.obj = {name: "Estou no global!"} // Define uma instância global que retorno algo