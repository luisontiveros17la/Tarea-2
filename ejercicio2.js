// Conversiones de unidades
const wattAHP = (watts) => watts / 745.699872; // 1 hp = 745.699872 W
const hpAWatt = (hp) => hp * 745.699872; // 1 hp = 745.699872 W

// Solicitar al usuario la opción de conversión
const opcion = prompt("Selecciona la opción de conversión:\n1. Watts a HP\n2. HP a Watts");

// Solicitar el valor al usuario según la opción seleccionada
if (opcion === "1") {
  const watts = parseFloat(prompt("Ingresa el valor en watts:"));
  const hp = wattAHP(watts);
  console.log(`${watts} watts equivalen a ${hp.toFixed(4)} caballos de fuerza.`);
} else if (opcion === "2") {
  const hp = parseFloat(prompt("Ingresa el valor en caballos de fuerza (HP):"));
  const watts = hpAWatt(hp);
  console.log(`${hp} caballos de fuerza equivalen a ${watts.toFixed(4)} watts.`);
} else {
  console.log("Opción inválida. Por favor, selecciona 1 o 2.");
}
