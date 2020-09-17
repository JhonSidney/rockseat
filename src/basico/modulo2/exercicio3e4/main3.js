var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');


var users = ['Diego ','Gabriel ','Lucas '];


function renderUsers(){
    listElement.innerHTML = '';
    
    for(user of users){
        var userElement =  document.createElement('li');
        var usertext = document.createTextNode(user);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');

        var pos = users.indexOf(user);
        linkElement.setAttribute('onclick', 'deleteUser('+pos+')');

        linkElement.appendChild(linkText);
        userElement.appendChild(usertext);
        userElement.appendChild(linkElement)
        listElement.appendChild(userElement);

    }
}

function addUser(){
    var userText = inputElement.value;

    users.push(userText);
    inputElement.value = '';
    renderUsers();
}

function deleteUser(pos){
    users.splice(pos,1);
    renderUsers();
}

btnElement.onclick = addUser;
renderUsers();