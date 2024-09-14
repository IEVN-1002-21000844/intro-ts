class Puntos {
  constructor(public numero1: number, public numero2: number) {}

  calcularDistancia(segundoNum: Puntos): number {
    const ejex = this.numero1 - segundoNum.numero1;
    const ejey = this.numero2 - segundoNum.numero2;
    return Math.sqrt(ejex * ejex + ejey * ejey);
  }
}

const punto1 = new Puntos(3, 4);
const punto2 = new Puntos(7, 1);
const distancia = punto1.calcularDistancia(punto2);
console.log(`La distancia entre los puntos es: ${distancia}`);