// Tupla: Array com tipos bem específicos e tamanho fixo
// Em TS tupla pode ser mudado (ou não)
const dadosClientes1: [number, string] = [1, 'Joelma'];
const dadosClientes2: readonly [number, string, string] = [3, 'Maria', 'Silva'];
const dadosClientes3: [number, string, string?] = [7, 'Joelma'];
const dadosClientes4: [number, string, ...string[]] = [30, 'Pedro', 'Assis'];
const dadosClientes5: [number, string, ...string[]] = [
  30,
  'Pedro',
  'Assis',
  'Silva',
];

dadosClientes1[0] = 10;
dadosClientes1[1] = 'Regina';
//dadosClientes2.pop(); Da erro e não permite a retirada (nem adição ou reatribuiçao) dos elementos pois a variável foi declarada com o READONLY

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);
console.log(dadosClientes5);

// Readonly array
const array1: readonly string[] = ['Joelma', 'Regina'];
const array2: ReadonlyArray<string> = ['Alice', 'Hand'];

console.log(array1);
console.log(array2);
