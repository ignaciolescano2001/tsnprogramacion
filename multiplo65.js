"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pedirNumeros() {
    rl.question('Introduce el primer número: ', function (numero1) {
        rl.question('Introduce el segundo número: ', function (numero2) {
            var num1 = parseInt(numero1);
            var num2 = parseInt(numero2);
            if (num2 === 0) {
                console.log('⚠️ El segundo número no puede ser 0, intenta nuevamente.');
                pedirNumeros(); // Vuelve a pedir los números
                return;
            }
            if (num1 % num2 === 0) {
                console.log(" ".concat(num1, " es m\u00FAltiplo de ").concat(num2));
            }
            else {
                console.log(" ".concat(num1, " no es m\u00FAltiplo de ").concat(num2));
            }
            // Preguntar si quiere continuar
            rl.question('¿Quieres introducir otro par de números? (s/n): ', function (respuesta) {
                if (respuesta.toLowerCase() === 's') {
                    pedirNumeros(); // Repetir el proceso
                }
                else {
                    console.log('¡Hasta luego!');
                    rl.close(); // Cerrar la interfaz si no desea continuar
                }
            });
        });
    });
}
pedirNumeros(); // Iniciar la función al principio
