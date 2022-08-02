// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Joelma',
  sobrenome: 'Silva',
  enderecos: ['Av. BH'],
  idade: 29,
};

pessoa.idade = 31;
console.log(pessoa);
