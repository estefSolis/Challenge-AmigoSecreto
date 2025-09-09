let numeroSecreto = 0;
let intentos = 1;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarValores(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
}

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroSecreto === numeroUsuario){
        asignarValores('p', `Felicidades adivinaste el numero secreto en ${intentos} ${intentos == 1 ? 'vez.' : 'veces.'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarValores('p', 'El numero secreto es menor');
        }else{
            asignarValores('p', 'El numero secreto es mayor');              
        }      
        intentos++;
        console.log(intentos);
        limpiarCaja();
    } 
    
    return;  
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    console.log(numeroGenerado);
    console.log(listaNumeros);

    if(listaNumeros.length == numeroMaximo){
        asignarValores('p','Ya se jugaron todos los numeros');
        return;        
    }else{
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();        
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function inicio(){    
    asignarValores('h1', 'Juego del numero Secreto');
    asignarValores('p', 'Ingrese un numero del 1 al ' +numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    return;
}

function nuevoJuego(){
    inicio();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return;
}

inicio();