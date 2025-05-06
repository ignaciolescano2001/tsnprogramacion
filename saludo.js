"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('¿Cómo te llamas, viajero de la consola? ', function (nombre) {
    console.log("\uD83C\uDF1F Hola, ".concat(nombre, ". \u00A1Bienvenido al reino de TypeScript!"));
    rl.close();
});
