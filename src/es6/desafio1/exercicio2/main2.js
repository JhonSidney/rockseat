const usuarios = [ 
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


    const idades = usuarios.map(function(item){
        return item.idade;
    });

    const usuariosEmpresas = usuarios.filter(function(item){
        if(item.idade >18 && item.empresa === "Rocketseat"){
            return item;
        }
    });

    const pesquisa = usuarios.find(function(item){
        return item.empresa == "Google";
    });

    const duplicaIdade = usuarios.filter(function(item){
         item.idade = item.idade*2;
         return item;
    });

    const antesdos50 = duplicaIdade.filter(function(item){
        if(item.idade < 50){
            return item;
        }
        return 
    });





console.log(idades);
console.log(usuariosEmpresas);
console.log(pesquisa);
console.log('-----------');
console.log(antesdos50);
