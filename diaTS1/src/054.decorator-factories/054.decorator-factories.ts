function inverteNomeECor(param1: string, param2: string) {
  //Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}
// O digitado acima é o mesmo que digitar:
// inverteNomeECor(Animal);

const animal = new Animal('Joelma', 'lilás');
console.log(animal);
