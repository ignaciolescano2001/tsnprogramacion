import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumeros() {
  rl.question('Introduce el primer número: ', (numero1: string) => {
    rl.question('Introduce el segundo número: ', (numero2: string) => {
      const num1 = parseInt(numero1);
      const num2 = parseInt(numero2);

      if (num2 === 0) {
        console.log('⚠️ El segundo número no puede ser 0, intenta nuevamente.');
        pedirNumeros(); // Vuelve a pedir los números
        return;
      }

      if (num1 % num2 === 0) {
        console.log(` ${num1} es múltiplo de ${num2}`);
      } else {
        console.log(` ${num1} no es múltiplo de ${num2}`);
      }

      // Preguntar si quiere continuar
      rl.question('¿Quieres introducir otro par de números? (s/n): ', (respuesta: string) => {
        if (respuesta.toLowerCase() === 's') {
          pedirNumeros(); // Repetir el proceso
        } else {
          console.log('¡Hasta luego!');
          rl.close(); // Cerrar la interfaz si no desea continuar
        }
      });
    });
  });
}

pedirNumeros(); // Iniciar la función al principio
