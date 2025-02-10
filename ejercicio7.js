// Solicitar al usuario que ingrese 5 números y almacenarlos en un array
const numeros = [];
for (let i = 0; i < 5; i++) {
  const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  numeros.push(numero);
}

// Calcular la suma de los números
const suma = numeros.reduce((total, numero) => total + numero, 0);

// Calcular el promedio de los números
const promedio = suma / numeros.length;

// Encontrar el número mayor y el número menor
const numeroMayor = Math.max(...numeros);
const numeroMenor = Math.min(...numeros);

// Mostrar los resultados en la consola
console.log(`Números ingresados: ${numeros.join(", ")}`);
console.log(`Suma: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${numeroMayor}`);
console.log(`Número menor: ${numeroMenor}`);
