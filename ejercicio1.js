// Pedir los numeros al Usuario 
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Realizar las operaciones básicas
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

// Mostrar los resultados en la consola
console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
console.log(`La resta de ${numero1} y ${numero2} es: ${resta}`);
console.log(`La multiplicación de ${numero1} y ${numero2} es: ${multiplicacion}`);
console.log(`La división de ${numero1} y ${numero2} es: ${division}`);
