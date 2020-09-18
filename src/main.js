import { resolve } from 'bluebird';
import  * as ClasseUsuario  from './functions';
import {idade as idadeUsuario} from './functions';

console.log(ClasseUsuario.default.info());
console.log(idadeUsuario);


console.log('-------------------------------');

const delay = (time) => new Promise( resolve => {setTimeout( () => {resolve(time)}, 1000)});

async function umporSegundo(){

    console.log(await delay(1));
    console.log(await delay(2));
    console.log(await delay(3));
}


umporSegundo();