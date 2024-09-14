class Puntos {
    constructor(public numero1: number, public numero2: number) {}
  
    // Método para calcular la distancia entre este punto y otro punto
    calcularDistancia(otro: Puntos): number {
      const numeros1 = this.numero1 - otro.numero1;
      const numeros2 = this.numero2 - otro.numero2;
      return Math.sqrt(numeros1 * numeros1 + numeros2 * numeros2);
    }
  }

class Triangulo extends Puntos {
    static formaTriangulo(punto1: Puntos, punto2: Puntos, punto3: Puntos): boolean {
      const determinante =
        punto1.numero1 * (punto2.numero2 - punto3.numero2) +
        punto2.numero1 * (punto3.numero2 - punto1.numero2) +
        punto3.numero1 * (punto1.numero2 - punto2.numero2);
  
      return determinante !== 0;
    }
  }
  
  const punto1 = new Puntos(1, 2);
  const punto2 = new Puntos(4, 6);
  const punto3 = new Puntos(7, 2);
  
  if (Triangulo.formaTriangulo(punto1, punto2, punto3)) {
    console.log('Los puntos forman un triángulo.');
  } else {
    console.log('Los puntos NO forman un triángulo.');
  }  