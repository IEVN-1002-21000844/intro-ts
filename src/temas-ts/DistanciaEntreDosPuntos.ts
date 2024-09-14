class Puntos {
    constructor(public numero1: number, public numero2: number) {}
  
    calcularDistancia(otro: Puntos): number {
      const numeros1 = this.numero1 - otro.numero1;
      const numeros2 = this.numero2 - otro.numero2;
      return Math.sqrt(numeros1 * numeros1 + numeros2 * numeros2);
    }
  }

const puntos1 = new Puntos(1, 2);
const puntos2 = new Puntos(4, 6);

const distancia = puntos1.calcularDistancia(puntos2);
console.log(`La distancia entre los dos puntos es: ${distancia}`);
  