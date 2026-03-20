/********************************************************************************************************
 * objetivo: criar uma aplicação q realiza buscas de determinadas maneiras
 * autor: Gabriel Renato
 * Data: 18/03/2026
 * versão: 1.0
 * ******************************************************************************************************/

var estado = require('./estados_cidades')

    
var UF = [];

function getlistadeestados() {

    estado.listaDeEstados.estados.forEach(item => {
      UF.unshift(item.sigla);
    });

    console.log(UF);
    console.log(`Quantidade: ${UF.length}`)
    
}



var ufs = String('ac').toUpperCase()
function getDadosEstado(){

    const ufEstados = estado.listaDeEstados.estados.find(est => est.sigla === ufs ); 
    if (ufEstados) {
        var dados = {
        uf: ufEstados?.sigla,
        descricao: ufEstados?.nome,
        capital: ufEstados?.capital,
        regiao: ufEstados?.regiao
        };

        //separa sem deixar como string o json selecionado
        console.dir(dados, {
            colors: true,
            depth: null,
            compact: false
        });
    }

}

var ufscap = String('am').toUpperCase()
function getCapitalEstado () {
    const capitais = estado.listaDeEstados.estados.find(cap => cap.sigla === ufscap);
    if (capitais) {
        var capital = {
            uf: capitais.sigla,
            descricao: capitais.nome,
            capital: capitais.capital
        };
        console.log(capital)
    }
}



function getEstadosRegiao () {
    
}

getlistadeestados()
getDadosEstado()
getCapitalEstado()



//nomes: user.dados.map(item => item.nome)