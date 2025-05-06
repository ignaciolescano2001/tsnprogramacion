import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número entero: ', (numero1: string) => {
  rl.question('Introduce el segundo número entero: ', (numero2: string) => {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);

    if (num1 === num2) {
      console.log(`✨ Ambos números son iguales: ${num1}`);
    } else if (num1 > num2) {
      console.log(`✨ El primer número (${num1}) es mayor que el segundo (${num2})`);
    } else {
      console.log(`✨ El segundo número (${num2}) es mayor que el primero (${num1})`);
    }

    rl.close();
  });
});
