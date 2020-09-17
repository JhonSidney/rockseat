
const empresa ={
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',

    }
};

const {nome, endereco:{cidade,estado}} = empresa;

console.log(nome);

console.log(cidade);

console.log(estado);



function mostrainfor({nome,idade}){
    return `${nome} tem ${idade} anos`;
}

const a = mostrainfor({nome: 'Diego', idade: 23});
console.log(a);

