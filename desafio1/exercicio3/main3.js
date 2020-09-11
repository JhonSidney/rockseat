function temHabilidade(skills){
    var n = skills.indexOf("Javascript"); 
    if(n >= 0){
        return true;
    } else{
        return false;
    }
}

var skills = ["Javascript","ReactJs", "React Native"];

var result = temHabilidade(skills);
alert("Resposta:"+result);