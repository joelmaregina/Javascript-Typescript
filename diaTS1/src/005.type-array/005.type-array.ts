// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('1', '2', '3');
const upper = toUpperCase('a', 'b', 'c', 'd');

console.log(result);
console.log(concatenacao);
console.log(upper);

// Readonly array
const array1: readonly string[] = ['Joelma', 'Regina'];
const array2: ReadonlyArray<string> = ['Alice', 'Hand'];

console.log(array1);
console.log(array2);
