var textEntrada = document.querySelector('#entrada-texto');
var outInput = document.querySelector('#saida');

function criptografar() {
    var texto = textEntrada.value;

    var resultadoCriptografar = texto.replace(/a/, "12").replace(/e/, "34").replace(/i/, "56").replace(/o/, "78").replace(/u/, "90");

    document.getElementById('saida').innerHTML = '<textarea readonly id="saida-texto" col="10" rows="17">' + resultadoCriptografar
    if (texto == 0) {
        alert("Por favor, digite um texto.")
    }
}

function descriptografar() {
    var texto = textEntrada.value;

    var resultadoDescriptografar = texto.replace(/12/, "a").replace(/34/, "e").replace(/56/, "i").replace(/78/, "o").replace(/90/, "u");

    document.getElementById('saida').innerHTML = '<textarea readonly id="saida-texto" col="10" rows="17">' + resultadoDescriptografar

}

function copiar() {
    var textoCopiado = document.querySelector("#saida-texto");

    textoCopiado.select();

    document.execCommand("copy");

    alert("Texto copiado: " + textoCopiado.value);
}


