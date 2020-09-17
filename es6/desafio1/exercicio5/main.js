
const array = [1,2,3,4,5,6,7];

const [x, ...y] = array;

console.log(x);
console.log(y);

console.log('----------------------')

function soma(...params){
    return params.reduce((total,next) => total + next);
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));