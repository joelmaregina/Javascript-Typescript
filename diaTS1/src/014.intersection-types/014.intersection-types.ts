// Funciona como Intersecção (˜= AND)

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B' | 'C';
type AC = 'B' | 'C' | 'D';
type BD = 'A' | 'D' | 'C';
type intersecao = AB & AC; // 'B' | 'C'
type intersecao2 = AB & AC & BD; // 'C'

const pessoa: Pessoa = {
  nome: 'Joelma',
  sobrenome: 'Silva',
  idade: 29,
};

//Module mode
export { pessoa };
