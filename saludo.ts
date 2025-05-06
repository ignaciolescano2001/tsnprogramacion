import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo te llamas, viajero de la consola? ', (nombre: string) => {
  console.log(`🌟 Hola, ${nombre}. ¡Bienvenido al reino de TypeScript!`);
  rl.close();
});
