// Solicitar el nombre y apellido al usuario
const nombre = prompt("Ingresa tu/s nombre/s:");
const apellido = prompt("Ingresa tu/s apellido/s:");

// Convertir el nombre completo a mayúsculas
const nombreCompleto = `${nombre} ${apellido}`.toUpperCase();

// Mostrar el mensaje de bienvenida en la consola
console.log(`¡Bienvenido, ${nombreCompleto}!`);
