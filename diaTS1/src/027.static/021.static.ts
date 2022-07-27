//Método estático - Método que pode ser acessado sem instanciar a classe. Também não temos acesso ele pela instância da pessoa (ex. pessoa.falaOi() não é possível). O acesso se da pela classe apenas (ex: Pessoa.falaOi())

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    // Por ser estático, não é possivel acessar os seus valores dentro da classe usando o "this", seria necessário:
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static falaOi(): void {
    console.log('OI');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Joelma', 'Silva', 30, '012.345.678-91');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Silva');

console.log(pessoa1);
console.log(pessoa2);
Pessoa.falaOi();

console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Retorna os valores dos atributos estáticos através da classe
pessoa1.metodoNormal(); // Acessará os metodos estáticos internamente e nos retornará através da instância da classe.
