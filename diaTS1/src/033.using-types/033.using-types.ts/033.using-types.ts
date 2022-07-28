type TipoNome = {
  nome: string;
};
type TipoSobrenome = {
  sobrenome: string;
};
type TipoNomeCompleto = {
  nomeCompleto: () => string;
};
// Com "type" não é possivel utilizar 'protected' nem 'private'

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Joelma', 'Silva');
console.log(pessoa.nomeCompleto());
