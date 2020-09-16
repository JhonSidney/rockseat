var inputElement = document.querySelector('#app input');
var btnElement =  document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

var users=["carlos "," eduardo"];




function renderUser(){

    listElement.innerHTML='';

    for(user of users){

        var repoElement = document.createElement('li');
        var userText = document.createTextNode(user);

        
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('apagar');
        linkElement.setAttribute('href', '#');


        var posicao = users.indexOf(user);
        linkElement.setAttribute('onclick','deleteUser('+posicao+')');
    
        repoElement.appendChild(userText);
        linkElement.appendChild(linkText);
        repoElement.appendChild(linkElement);
        listElement.appendChild(repoElement);


    }
}


function deleteUser(posicao){
    users.splice(posicao,1);
    renderUser();

}


function addUser(){
    var userName = inputElement.value;

    users.push(userName);
    inputElement.value = '';

    renderUser();

}


btnElement.onclick = addUser;


