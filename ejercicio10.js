// Definir la clase Producto
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  // Método para agregar unidades al inventario
  agregarUnidades(cantidad) {
    this.cantidad += cantidad;
    console.log(`Se han agregado ${cantidad} unidades de ${this.nombre}. Cantidad actual: ${this.cantidad}`);
  }

  // Método para quitar unidades del inventario
  quitarUnidades(cantidad) {
    if (cantidad > this.cantidad) {
      console.log(`No se pueden quitar ${cantidad} unidades de ${this.nombre}. Cantidad actual: ${this.cantidad}`);
    } else {
      this.cantidad -= cantidad;
      console.log(`Se han quitado ${cantidad} unidades de ${this.nombre}. Cantidad actual: ${this.cantidad}`);
    }
  }
}

// Crear una instancia de la clase Producto
const producto1 = new Producto("Manzana", 1.5, 100);

// Probar los métodos agregarUnidades y quitarUnidades
producto1.agregarUnidades(20);  // Se han agregado 20 unidades de Manzana. Cantidad actual: 120
producto1.quitarUnidades(50);   // Se han quitado 50 unidades de Manzana. Cantidad actual: 70
producto1.quitarUnidades(100);  // No se pueden quitar 100 unidades de Manzana. Cantidad actual: 70
