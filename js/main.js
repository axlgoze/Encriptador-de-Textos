//Obtener entrada
var input = document.querySelector(".main-input")
//arreglo de cambios
const matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

//funcion para encriptar texto
function encriptacion(){
    //almacenando valor de entrada
    const cadena = encripta(input.value);
}

function de_encriptacion(){
    const cadena = desencripta(input.value);
}

function encripta(mensaje){
    //input to lowercase
    cadena = mensaje.toLowerCase();
    //ciclo para recorrer y reemplazar
    for(let i=0; i<matriz.length; i++){
        if(cadena.includes(matriz[i][0])){
            cadena = cadena.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    // return cadenaEncriptada;
    document.getElementById("card-title").style.visibility = "hidden"; // hide
    document.getElementById("card-title").innerHTML = 'Mensaje cifrado';
    document.getElementById("card-body").innerHTML = cadena;
    document.getElementById("card-title").style.visibility = "visible"; // show
    // document.getElementById("card-body").style.visibility = "hidden";
    console.log(cadena)
}

function desencripta(mensaje){
    cadena = mensaje.toLowerCase();
    for(let i=0; i<matriz.length; i++){
        if(cadena.includes(matriz[i][0])){
            cadena = cadena.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    document.getElementById("card-title").style.visibility = "hidden"; // hide
    document.getElementById("card-title").innerHTML = 'Mensaje cifrado';
    document.getElementById("card-body").innerHTML = cadena;
    document.getElementById("card-title").style.visibility = "visible"; // show
    console.log(cadena)
}
    




// var buttonEncriptar = document.getElementById("doEncripta")
// buttonEncriptar.onclick = encriptacion;

// function imprimirConsola(){
//     console.log(input.value)
// }