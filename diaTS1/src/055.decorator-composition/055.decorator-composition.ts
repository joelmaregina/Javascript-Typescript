interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  //Closure
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador ' + param1);
    return target;
  };
}

@outroDecorador(' O param do outro decorator ') // 2 executado
@inverteNomeECor('valor1', 'valor2') // 1 executado
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}
// O digitado acima é o mesmo que digitar:
// inverteNomeECor(Animal);

const animal = new Animal('Joelma', 'lilás');
console.log(animal);
