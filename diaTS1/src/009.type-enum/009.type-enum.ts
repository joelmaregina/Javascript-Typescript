enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores { // Será unido ao Enum acima
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA, // 202
}

console.log(Cores); // imprime o enum completo
console.log(Cores.VERMELHO); // 10
console.log(Cores[10]); // VERMELHO
console.log(Cores[610]); // undefined

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(123456); //Typescript nao da erro: undefined

//Pode não ser declarado valores tbm, será atribuido automaticamente:
enum Genero {
  drama, // 0
  comédia, // 1
  romance, // 2
  policial, // 3
  terror, // 4
}

console.log(Genero);
