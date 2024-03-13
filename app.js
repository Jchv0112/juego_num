let numeroSecreto = 0;
let intentos =1;
let listaNumerosSorteados = [];
let numeroMax = 3;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt (document.getElementById ("valorUsuario").value);
    
    if (numeroSecreto===numeroDeUsuario){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (numeroDeUsuario >numeroSecreto){
            asignarTextoElemento("p", "El numero es menor");      
            
        }
        else {
            asignarTextoElemento("p","El numero es mayor");
        }
        intentos ++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ="";
    
}

function generarNumeroSecreto() {
    numeroGenerado = Math.floor (Math.random()*numeroMax)+1; 

    if (listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", "Indica un numero del 1 al " + numeroMax);
    numeroSecreto=generarNumeroSecreto();
    intentos =1;

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute ("disabled", true);

}

condicionesIniciales();



