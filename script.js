const textArea = document.getElementById("input-text");
let mensaje = document.getElementById("output-text");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const texto = textArea.value.toLowerCase();
    const mensajeEncriptado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    // mensajeEncriptado.replace(/e/g,"enter");
    // mensajeEncriptado.replace(/i/g,"imes");
    // mensajeEncriptado.replace(/a/g,"ai");
    // mensajeEncriptado.replace(/o/g,"ober");
    // mensajeEncriptado.replace(/u/g,"ufat");

    mensaje.value = mensajeEncriptado;
}

function btnDesencriptar() {
    const texto = textArea.value.toLowerCase();
    const mensajeDesencriptado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    mensaje.value = mensajeDesencriptado;
}