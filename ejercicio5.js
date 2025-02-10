// Solicitar el ancho y el alto al usuario
const ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
const alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));

// Calcular el área y el perímetro del rectángulo
const area = ancho * alto;
const perimetro = 2 * (ancho + alto);

// Mostrar los resultados en la consola
console.log(`El área del rectángulo es: ${area}`);
console.log(`El perímetro del rectángulo es: ${perimetro}`);
