// Obtenemos el botón, el input y el lugar donde mostrar el saludo
var saludarBtn = document.getElementById('saludarBtn');
var nombreInput = document.getElementById('nombre');
var saludoParrafo = document.getElementById('saludo');
// Función para saludar al usuario con el nombre ingresado
function saludar() {
    var nombre = nombreInput.value.trim();
    if (nombre) {
        saludoParrafo.textContent = "\u00A1Hola, ".concat(nombre, "!");
    }
    else {
        saludoParrafo.textContent = "Por favor, ingresa tu nombre.";
    }
}
// Asignamos la función al botón de "Saludar"
saludarBtn.addEventListener('click', saludar);
