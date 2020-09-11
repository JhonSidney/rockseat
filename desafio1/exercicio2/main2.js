
function pares(x,y){
    var lista=[];

    for (var i=x; i<=y ;i++){
        if(i%2 ==0){
            lista.push(i);
        }


    }
    return lista;

}

var resultado = [];

resultado = pares(32,321);

alert("Resposta:"+resultado);