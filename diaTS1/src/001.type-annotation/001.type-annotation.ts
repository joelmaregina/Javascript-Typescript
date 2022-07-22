/* eslint-disable*/

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Joelma'; // Qualquer tipo de strings: '' "" ``
let idade: number = 1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744 (decimal, hexadecimal, octadecimal (...))
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays - 2 fomas de declarar:
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = { //adulto? => Opcional
  idade: 30,
  nome: 'Luiz'
};

// Funções
function soma(x: number, y: number): number { // neste caso não precisa do : number, pois o TS já faz a inferência
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

