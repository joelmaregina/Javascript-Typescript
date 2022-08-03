interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Joelma',
  sobrenome: 'Silva',
  idade: 29,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 29,
};

const aluno3: PessoaProtocolo = {
  nome: 'Maria',
  sobrenome: 'Silva',
  idade: 45,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
