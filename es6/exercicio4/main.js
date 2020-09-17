
const empresa ={
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',

    }
};
/*
const {nome, endereco:{cidade,estado}} = empresa;

console.log(nome);

console.log(cidade);

console.log(estado);



function mostrainfor({nome,idade}){
    return `${nome} tem ${idade} anos`;
}

const a = mostrainfor({nome: 'Diego', idade: 23});
console.log(a);
*/

const array = [1,2,3,4,5,6,7];

const [x, ...y];

console.log(x);
console.log(y);