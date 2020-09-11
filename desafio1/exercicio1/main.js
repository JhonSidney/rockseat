
function imprime(end){

    var resultado;
    resultado = "O usuário mora em "+end.cidade+"/"+end.uf+", no bairro "+end.bairro+
    ",  na rua "+end.rua+" com o nº "+end.numero;

    return resultado;

}


var endereco = {
    rua: "Rua dos pinheiros", 
    numero: 1293,
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP"
};

var resultado  = imprime(endereco);
alert("Resposta:"+resultado); 