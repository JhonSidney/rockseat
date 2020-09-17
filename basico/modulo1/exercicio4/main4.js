function experiencia(anos){
    var exp;

    if( anos<=0 || anos == 1){
        exp = "Iniciante";
    }else if (anos<=3){
        exp = "Intermediario";
    }else if(anos<=6){
        exp = "Avançado";
    }else if(anos == 7){
        exp = "Jedi Master";
    }else{
        exp = "Jedi Master";
    }

    return exp;

}

var anosEstudo = -1;
var resultado = experiencia(anosEstudo);
alert(resultado);