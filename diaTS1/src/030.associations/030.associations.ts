export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Joelma');
const caneta = new Caneta('Compactor');
const maquinaEscrever = new MaquinaEscrever('HP');

console.log(escritor.nome); // Joelma
console.log(caneta.nome); //Compactor
console.log(maquinaEscrever.nome); //HP

escritor.ferramenta = caneta;
escritor.escrever(); // Compactor está escrevendo...
escritor.ferramenta = maquinaEscrever;
escritor.escrever(); // HP está digitando...
escritor.ferramenta = null;
escritor.escrever(); // Não posso escrever sem ferramenta...
