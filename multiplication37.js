"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Introduce el primer número entero: ', function (numero1) {
    var num1 = parseInt(numero1);
    if (num1 === 0) {
        console.log('✨ El producto de 0 por cualquier número es 0');
        rl.close();
    }
    else {
        rl.question('Introduce el segundo número entero: ', function (numero2) {
            var num2 = parseInt(numero2);
            var producto = num1 * num2;
            console.log("\u2728 El producto de ".concat(num1, " y ").concat(num2, " es: ").concat(producto));
            rl.close();
        });
    }
});
