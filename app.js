var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var Dibujo = document.querySelector(".dibujo");
var Contenedor = document.querySelector(".contenedor-parrafo");
var Resultado = document.querySelector(".text-resultado");
const modalEncriptado = document.getElementById("mEncriptado");
const modalDesencriptado = document.getElementById("mDesencriptado");
const modalError = document.getElementById("mError");

const closeModalEncriptado = document.getElementById("closeModalEncriptado");
const closeModalDesencriptado = document.getElementById("closeModalDesencriptado");
const closeModal = document.getElementById("closeModal");
const closeModalError = document.getElementById("closeModalError");

closeModalEncriptado.addEventListener("click", () => {
    modalEncriptado.style.display = "none";
});

closeModalDesencriptado.addEventListener("click", () => {
    modalDesencriptado.style.display = "none";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

closeModalError.addEventListener("click", () => {
    modalError.style.display = "none";
});

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    var cajatexto = recuperarText();
    if (cajatexto !== "") {
        ocultarAdelante();
        Resultado.textContent = encriptarTexto(cajatexto);
        modalEncriptado.style.display = "block";
        btnCopiar.style.display = "inline-block";
    }
}

function desencriptar() {
    var cajatexto = recuperarText();
    if (cajatexto !== "") {
        ocultarAdelante();
        Resultado.textContent = desencriptarTexto(cajatexto);
        modalDesencriptado.style.display = "block";
        btnCopiar.style.display = "inline-block";
    }
}

function recuperarText() {
    var cajatexto = document.querySelector(".caja-text");
    var texto = cajatexto.value;

    // Verificar si el texto contiene caracteres no permitidos
    if(/[A-Z]|[\u00C0-\u00FF]|[^a-z\s]/.test(texto)) {
        modalError.style.display = "inline-block";
        return ""; // Devolver una cadena vacía para evitar la ejecución de encriptar/desencriptar
    }

    return texto;
}


function ocultarAdelante() {
    Dibujo.classList.add("ocultar");
    Contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");

btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".text-resultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            console.log("Texto copiado al portapapeles: ", contenido);
            mostrarModal();
        })
        .catch(err => {
            console.error("Error al copiar texto: ", err);
            alert("Error al copiar texto :(");
        });
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

function mostrarModal() {
    modal.style.display = "block";
}

function resetear() {
    var cajaTexto = document.querySelector(".caja-text");
    var resultado = document.querySelector(".text-resultado");
    cajaTexto.value = "";
    resultado.textContent = "";
    btnCopiar.style.display = "none";
    mostrarElementos();
}

function mostrarElementos() {
    var dibujo = document.querySelector(".dibujo");
    var contenedor = document.querySelector(".contenedor-parrafo");
    dibujo.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}
