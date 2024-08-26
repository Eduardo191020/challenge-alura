let contenido = document.getElementById("escribir_texto");
let mensaje = document.getElementById("mensaje");
let rectanguloParrafo = document.getElementById("rectangulo_parrafo");
let textoResultado = document.getElementById("texto_resultado");
let copiarButton = document.querySelector(".copiar");
let rectanguloHijo = document.getElementById("rectangulo_hijo");

function encriptarTexto() {
    let textoEncriptar = contenido.value.toLowerCase();
    let textoFinal = ""; 
    for(let i = 0; i < textoEncriptar.length; i++){
        let char = textoEncriptar[i];
        if(char === 'a'){
            textoFinal += 'ai';
        } else if(char === 'e'){
            textoFinal += 'enter';
        } else if(char === 'i'){
            textoFinal += 'imes';
        } else if(char === 'o'){
            textoFinal += 'ober';
        } else if(char === 'u'){
            textoFinal += 'ufat';
        } else {
            textoFinal += char;
        }
    }

    mostrarResultado(textoFinal);
}

function desencriptarTexto() {
    let textoDesencriptar = contenido.value.toLowerCase();
    let textoFinal = textoDesencriptar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoFinal);
}

function mostrarResultado(texto) {
    if (texto) {
        rectanguloHijo.style.display = "none";  // Oculta la imagen y el texto inicial
        textoResultado.style.display = "block";
        copiarButton.style.display = "block";
        textoResultado.value = texto;
        textoResultado.style.height = "340px";  // Asegura que el textarea ocupe el espacio completo
        textoResultado.style.backgroundColor = "#fff";
    } else {
        rectanguloHijo.style.display = "flex";  // Muestra la imagen y el texto inicial si no hay resultado
        textoResultado.style.display = "none";
        copiarButton.style.display = "none";
    }
}

function copiarTexto() {
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
