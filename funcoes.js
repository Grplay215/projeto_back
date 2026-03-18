/********************************************************************************************************
 * objetivo: criar uma aplicação q realiza buscas de determinadas maneiras
 * autor: Gabriel Renato
 * Data: 18/03/2026
 * versão: 1.0
 * ******************************************************************************************************/

var estado = require('./estados_cidades')


function getlistadeestados() {
    //estado.listaDeEstados.estados.forEach(function(lista){
        
        
    //    let uf = String('sp').toUpperCase()
    //    let zona = 'Sudeste'
    //    if (String(zona) == String(lista.regiao) && String(uf) == String(lista.sigla) ) {
    //        console.log(`${lista.sigla}, ${lista.regiao} \n${lista.capital}`)
    //    } 

    //   lista.cidades.forEach(function(cidade) {
    //        console.log(`${cidade.nome}`)
    //    })
        
   // }) 
    estado.listaDeEstados.estados.forEach(function(sig) {
        console.log(sig.sigla)
    })

    console.log(estado.listaDeEstados.estados)
    
    
}

getlistadeestados()
