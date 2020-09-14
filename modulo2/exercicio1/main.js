

var btnElement =  document.querySelector('#botao');

function gerarCaixa(){

    var boxElement = document.createElement('div');
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#f00';
    boxElement.style.margin = 5;
    boxElement.classList.add('box');

    document.body.appendChild(boxElement);
    
}

