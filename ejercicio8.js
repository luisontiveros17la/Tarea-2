// Solicitar al usuario que ingrese una contraseña
const contraseña = prompt("Ingresa una contraseña:");

// Validar la longitud de la contraseña
if (contraseña.length < 8) {
  console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
  console.log("Éxito: La contraseña es válida.");
}
