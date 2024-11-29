// Función que genrea numero en formato Hexadecimal aletoria
function generarColorHex() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para que cambie fondo
function cambiarFondo() {
    document.body.style.backgroundColor = generarColorHex();
    //document.body.style.backgroundColor --> Es para cambiar el fondo de manera aleatoria con el otro fondo
}
