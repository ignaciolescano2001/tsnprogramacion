import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número entero: ', (numero1: string) => {
  const num1 = parseInt(numero1);

  if (num1 === 0) {
    console.log('✨ El producto de 0 por cualquier número es 0');
    rl.close();
  } else {
    rl.question('Introduce el segundo número entero: ', (numero2: string) => {
      const num2 = parseInt(numero2);
      const producto = num1 * num2;
      console.log(`✨ El producto de ${num1} y ${num2} es: ${producto}`);
      rl.close();
    });
  }
});
