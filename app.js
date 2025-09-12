let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value;
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else{
        amigos.push(amigo);
        cargarLista();
        console.log(amigos);
    }
}

function cargarLista(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
    return;
}

cargarLista();

