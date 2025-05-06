"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Introduce el primer número entero: ', function (numero1) {
    rl.question('Introduce el segundo número entero: ', function (numero2) {
        var num1 = parseInt(numero1);
        var num2 = parseInt(numero2);
        if (num1 === num2) {
            console.log("\u2728 Ambos n\u00FAmeros son iguales: ".concat(num1));
        }
        else if (num1 > num2) {
            console.log("\u2728 El primer n\u00FAmero (".concat(num1, ") es mayor que el segundo (").concat(num2, ")"));
        }
        else {
            console.log("\u2728 El segundo n\u00FAmero (".concat(num2, ") es mayor que el primero (").concat(num1, ")"));
        }
        rl.close();
    });
});
