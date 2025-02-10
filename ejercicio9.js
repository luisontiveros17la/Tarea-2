// Generar un número aleatorio entre 1 y 6
const lanzarDado = () => Math.floor(Math.random() * 6) + 1;

// Lanzar el dado y mostrar el resultado en la consola
const resultado = lanzarDado();
console.log(`El resultado del lanzamiento del dado es: ${resultado}`);
