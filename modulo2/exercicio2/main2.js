
var btnElement =  document.querySelector('button.botao');
var boxElement = document.querySelector(caixa);


function gerarCaixa(){
    var boxElement = document.createElement('div');
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#F00'
    boxElement.style.margin = 10;
    boxElement.classList.add('box');
    document.body.appendChild(boxElement);
    
}

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}




