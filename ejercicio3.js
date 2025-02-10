// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar la variable para almacenar la suposición del usuario
let suposicion = null;

// Solicitar al usuario que adivine el número
while (suposicion !== numeroAleatorio) {
  suposicion = parseInt(prompt("Adivina el número (entre 1 y 100):"), 10);

  if (suposicion > numeroAleatorio) {
    console.log("Más bajo.");
  } else if (suposicion < numeroAleatorio) {
    console.log("Más alto.");
  } else {
    console.log(`Muy bienn adivinaste el numero ¡felicidades! ${numeroAleatorio}.`);
  }
}
