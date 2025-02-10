// Definir la clase Coche
class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  // Método para encender el coche
  encender() {
    console.log(`El coche ${this.marca} ${this.modelo} del año ${this.año} está encendido.`);
  }
}

// Crear una instancia de la clase Coche
const miCoche = new Coche("Toyota", "Corolla", 2023);

// Llamar al método encender
miCoche.encender();
