var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var repos = [];



function renderRepos(){
    listElement.innerHTML = ' ';
    
    for(repo of repos){

        var repoElement =  document.createElement('li');
        var repotext = document.createTextNode(repo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');

        var pos = repos.indexOf(repo);
        linkElement.setAttribute('onclick', 'deleteUser('+pos+')');

        linkElement.appendChild(linkText);
        repoElement.appendChild(repotext);
        repoElement.appendChild(linkElement);
        listElement.appendChild(repoElement);

    }
}




function addRepo(){
    var repoText = inputElement.value;

    minhaPromise(repoText)
    .then(function(response){

        console.log(response);

        while(repos.length){
            repos.pop();
        }

        for(repo of response){
            repos.push(repo["name"]);
        }

        renderRepos();
    })
    .catch(function(error){
        console.log(error);
        alert(error);
       
    })

    inputElement.value = '';
    renderRepos();
}




function deleteRepo(pos){
    repos.splice(pos,1);
    renderRepos();
}




function load(){
    alert('Carregando...')
}



var minhaPromise =  function(name){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+name+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    setTimeout(load(),3000);
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Error 404: USUARIO NAO EXISTE!');
                }
            }
        }

    });
}



btnElement.onclick = addRepo;
renderRepos();

