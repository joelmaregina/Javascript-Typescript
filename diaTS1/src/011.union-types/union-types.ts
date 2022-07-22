// function addOrConcat(a: number | string, b: number | string) {
//   return a + b;
// } => Operator '+' cannot be applied to types 'string | number' and 'string | number'.

function addOrConcat(a: number | string, b: number | string) {
  // Inferência do Typescript => (a: number | string, b: number | string): string | number
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
