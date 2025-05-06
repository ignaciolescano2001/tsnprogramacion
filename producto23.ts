import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (numero1: string) => {
  rl.question('Introduce el segundo número: ', (numero2: string) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('⚠️ Por favor, introduce números válidos.');
    } else {
      const producto = num1 * num2;
      console.log(`✨ El producto de ${num1} y ${num2} es: ${producto}`);
    }

    rl.close();
  });
});
