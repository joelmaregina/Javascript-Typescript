// Interfaces e types funcionam da mesma maneira;
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// Pode usar o type 'TipoPessoa' ou a interface 'TipoPessoa2':
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Jojo',
  sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Joelma', 'Silva');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
