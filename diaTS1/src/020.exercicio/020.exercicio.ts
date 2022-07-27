export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Joelma', 29); //1* argumento do call vc especifica quem vai ser o this da função, os demais os argumentos da função especificamente
funcao.apply(new Date(), ['Joelma', 29]); //Mesma coisa do .call" mas você irá passar os argumentos num array
