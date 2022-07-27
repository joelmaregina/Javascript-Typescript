export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string, //para não conflitar com o método get/set do cpf (que se comporta como um atributo);
  ) {
    this.cpf = _cpf;
  }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   return this._cpf.replace(/\D/g, '');
  // }

  //get e set se comporta como um atributo apesar de ser um método:
  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Joelma', 'Silva', 30, '000.000.000-00');
pessoa.cpf = '111.222.333-44';
console.log(pessoa.cpf);

console.log(pessoa);
