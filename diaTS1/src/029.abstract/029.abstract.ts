//Abstract class -  Não permite que a classe seja instanciada diretamente, ela só podera ser instanciada pelas suas subclasses (Classes concretas)
export abstract class Personagem {
  protected abstract emoji: string; // Força todas as classes filhas que herdam desta classe a implementarem esse emoji

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void; // Contrato - Não pode ter corpo, isso será implementado (obrigatoriamente) apenas pelas classes concretas(filhas)
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUERREIRAAAAAA AOOOOOO ATAAAQUEEE!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
  }
}

//const personagem = new  Personagem('Persona', 55, 1000); // Cannot create an instance of an abstract class.
const guerreira = new Guerreira('Guereira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
