let amigos = [];

function agregarAmigo(){   
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value; 
    
    if(amigo === "" || amigo !== 'number'){
        alert("Por favor, inserte un nombre.");
        inputAmigo.value = "";
        return;
    }else{        
        amigos.push(amigo);    
        inputAmigo.value = "";         
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

function sortearAmigo(){
    let numIndice = amigos.length;
    let inputResultado = document.getElementById('resultado');

    if(numIndice > 0){
        let numSeleccionado = Math.floor(Math.random()*numIndice);
        inputResultado.innerHTML = "";
        inputResultado.innerHTML += "<li>" + amigos[numSeleccionado] + "</li>";
        console.log(numSeleccionado);
        console.log(amigos[numSeleccionado]);
    }else{
        alert("Agrega un amigo");
    }
}


cargarLista();

