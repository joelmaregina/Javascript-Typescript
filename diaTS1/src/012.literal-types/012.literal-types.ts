// Usar valores como types
let x = 10; // eslint-disable-line
x = 0b1010;
// x = 'Joelma'; // Não é permitido, pois o TS já o inferiu como 'number'

const y = 10; // Subtipo de number :Tipo literal: Só pode ser 10
//Outras formas ao invés de const:
// 01 tipo Literal: (não usar assim)
let a: 100 = 100; // eslint-disable-line
//02. Const assertion:
let b = 100 as const;  // eslint-disable-line
// a = 120; //ERRO: Type '120' is not assignable to type '100'.

//EX de uso:
const pessoa = {
  nome: 'Joelma' as const,
  sobrenome: 'Silva',
};
//pessoa.nome = 'Joelma1'; //Type '"Joelma1"' is not assignable to type '"Joelma"

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Verde'): string {
  return cor;
}
// 'Vermelho' 'Amarelo' 'Verde' => Tipos literais (O retorno só pode ser eles)
console.log(escolhaCor('Vermelho'));

//Module mode (Para sair do escopo global:)
export default 1;
