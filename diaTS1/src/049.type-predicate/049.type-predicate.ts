export function isNumber(value: unknown): value is number {
  // return { obj }
  return typeof value === 'number';
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3));
// console.log(soma(1, 2, 3, 'a')); // Red error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1, 'd', 3]));
console.log(soma('a', 'b', 'c'));
