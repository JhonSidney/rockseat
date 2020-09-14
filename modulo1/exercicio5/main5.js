function habilix(usuarios){
    var lista = [];
    
    for(var i=0;i<usuarios.length;i++){
        aux = " O "+usuarios[i].nome+", possui as habilidades: "+usuarios[i].habilidades; 
        lista.push(aux);
        
    }

    alert(lista);
}




var usuarios = [
    {
    nome:"Diego",
    habilidades:["Javascript ", " ReactJS "," Redux "]

    },

    {
        nome: "Gabriel",
        habilidades: [" VueJS ", " Ruby on rails ", " Elixir "]
    }  

];


habilix(usuarios);

