"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Introduce el primer número: ', function (numero1) {
    rl.question('Introduce el segundo número: ', function (numero2) {
        var num1 = parseFloat(numero1);
        var num2 = parseFloat(numero2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('⚠️ Por favor, introduce números válidos.');
        }
        else {
            var producto = num1 * num2;
            console.log("\u2728 El producto de ".concat(num1, " y ").concat(num2, " es: ").concat(producto));
        }
        rl.close();
    });
});
