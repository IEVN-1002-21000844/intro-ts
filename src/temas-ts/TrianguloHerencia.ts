class Puntos {
  constructor(public numero1: number, public numero2: number) {}

  calcularDistancia(segundoNum: Puntos): number {
    const ejex = this.numero1 - segundoNum.numero1;
    const ejey = this.numero2 - segundoNum.numero2;
    return Math.sqrt(ejex * ejex + ejey * ejey);
  }
}

class Triangulo extends Puntos {
  constructor(public punto1: Puntos, public punto2: Puntos, public punto3: Puntos) {
    super(punto1.numero1, punto1.numero2); 
  }

  formaTriangulo(): boolean {
    const determinante =
      this.punto1.numero1 * (this.punto2.numero2 - this.punto3.numero2) -
      this.punto2.numero1 * (this.punto3.numero2 - this.punto1.numero2) +
      this.punto3.numero1 * (this.punto1.numero2 - this.punto2.numero2);

    console.log(`El determinante es: ${determinante}`);

    return determinante !== 0;
  }
}

const punto1 = new Puntos(1, 2);
const punto2 = new Puntos(4, 6);
const punto3 = new Puntos(7, 2);

const triangulo = new Triangulo(punto1, punto2, punto3);

if (triangulo.formaTriangulo()) {
  console.log('Los puntos forman un triángulo.');
} else {
  console.log('Los puntos NO forman un triángulo.');
}