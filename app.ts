// Obtenemos el botón, el input y el lugar donde mostrar el saludo
const saludarBtn = document.getElementById('saludarBtn') as HTMLButtonElement;
const nombreInput = document.getElementById('nombre') as HTMLInputElement;
const saludoParrafo = document.getElementById('saludo') as HTMLParagraphElement;

// Función para saludar al usuario con el nombre ingresado
function saludar() {
    const nombre = nombreInput.value.trim();
    if (nombre) {
        saludoParrafo.textContent = `¡Hola, ${nombre}!`;
    } else {
        saludoParrafo.textContent = "Por favor, ingresa tu nombre.";
    }
}

// Asignamos la función al botón de "Saludar"
saludarBtn.addEventListener('click', saludar);
