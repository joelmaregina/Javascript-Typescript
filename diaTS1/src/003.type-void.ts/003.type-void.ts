//Funções ou métodos que não retornam nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luisa',
  sobrenome: 'Silva',

  exibirnome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
}; //sem o export dá erro pois o 'pessoa' já é utilizado em outro arquivo TS desde projeto (escopo global)

semRetorno('Joelma', 'Regina');
pessoa.exibirnome();

export { pessoa };
