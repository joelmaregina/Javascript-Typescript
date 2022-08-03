export class Person<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Person('Joelma', 29); // O TS já infere: Pessoa<string, number>
const pessoa2 = new Person(['Joelma'], 29); // O TS já infere: Pessoa<string[], number>
const pessoa3 = new Person(['Joelma'], { idade: 29 }); // O TS já infere: Pessoa<string[], { idade: number; }>
const pessoa4 = new Person<string, number>('Joelma', 29);

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elements[this.counter] = elemento;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  size(): number {
    return this.counter - 1;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const pilha = new Stack<number | string>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push('string');
pilha.push(5);
const elemento1 = pilha.pop();
console.log(elemento1);

pilha.showStack();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
