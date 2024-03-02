var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var Dibujo = document.querySelector(".dibujo");
var Contenedor = document.querySelector(".contenedor-parrafo");
var Resultado = document.querySelector(".text-resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;




// Función para encriptar texto
function encriptar() {
    // Ocultar elementos adelante en el flujo
    ocultarAdelante()
    
    // Recuperar texto desde CAJA_TEXTO
    var cajatexto = recuperarText()
    
    // Encriptar texto y mostrar resultado
    Resultado.textContent = encriptarTexto(cajatexto)
}

// Función para desencriptar texto
function desencriptar() {
    // Ocultar elementos adelante en el flujo
    ocultarAdelante()

    // Recuperar texto desde CAJA_TEXTO
    var cajatexto = recuperarText()
    
    // Desencriptar texto y mostrar resultado
    Resultado.textContent = desencriptarTexto(cajatexto)
}

// Función para recuperar texto
function recuperarText() {
    // Seleccionar caja de texto
    var cajatexto = document.querySelector(".caja-text")
    
    // Devolver valor de caja de texto
    return cajatexto.value
}

// Función to hide 'Dibujo' and 'Contenedor' elements
function ocultarAdelante() {
    // Add 'ocultar' class to 'Dibujo'
    Dibujo.classList.add("ocultar");    
    // Add 'ocultar' class to 'Contenedor'
    Contenedor.classList.add("ocultar"); 
}

function encriptarTexto(mensaje) {   // Función para encriptar texto
    var texto = mensaje;            // Texto de entrada
    var textoFinal = "";            // Texto de salida vacío

    // Iterar sobre cada carácter
    for(var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {        // Si el carácter es "a"
            textoFinal = textoFinal + "ai";  // Agregar "ai" al texto final
        }
        else if (texto[i] == "e") { // Si el carácter es "e"
            textoFinal = textoFinal + "enter";  // Agregar "enter" al texto final
        }
        else if (texto[i] == "i") { // Si el carácter es "i"
            textoFinal = textoFinal + "imes";  // Agregar "imes" al texto final
        }
        else if (texto[i] == "o") { // Si el carácter es "o"
            textoFinal = textoFinal + "ober";  // Agregar "ober" al texto final
        }
        else if (texto[i] == "u") { // Si el carácter es "u"
            textoFinal = textoFinal + "ufat";  // Agregar "ufat" al texto final
        }
        else {                      // De lo contrario
            textoFinal = textoFinal + texto[i];  // Agregar el carácter al texto final
        }
    }
    return textoFinal;             // Devolver el texto final
}

function desencriptarTexto(mensaje) { // Función para desencriptar texto
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) { // Iterar sobre cada letra
        if (texto[i] == "a") { // Si la letra es 'a'
            textoFinal = textoFinal + "a" // Agregar 'a' a texto final
            i = i+1; // Saltar una posición
        }
        else if (texto[i] == "e") { // Si la letra es 'e'
            textoFinal = textoFinal + "e" // Agregar 'e' a texto final
            i = i+4; // Saltar cuatro posiciones
        }
        else if (texto[i] == "i") { // Si la letra es 'i'
            textoFinal = textoFinal + "i" // Agregar 'i' a texto final
            i = i+3; // Saltar tres posiciones
        }
        else if (texto[i] == "o") { // Si la letra es 'o'
            textoFinal = textoFinal + "o" // Agregar 'o' a texto final
            i = i+3; // Saltar tres posiciones
        }
        else if (texto[i] == "u") { // Si la letra es 'u'
            textoFinal = textoFinal + "u" // Agregar 'u' a texto final
            i = i+3; // Saltar tres posiciones
        }
        else { // Si la letra no es ninguna de las anteriores
            textoFinal = textoFinal + texto[i] // Agregar letra al texto final
        }
    }

    return textoFinal; // Devolver el texto final
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            console.log("Texto copiado al portapapeles: ", contenido);
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar texto: ", err);
            alert("Error al copiar texto :(");
        });
});


