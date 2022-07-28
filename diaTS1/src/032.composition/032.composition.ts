// Composition -  A type of relationship between classes where one class contains another instead of inheriting from another.
// O 'Coraçao' de uma classe...
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado');
  }

  acelerar(): void {
    console.log('Motor acelerando');
  }

  freiar(): void {
    console.log('Motor freiando');
  }

  desligar(): void {
    console.log('Motor desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.freiar();
carro.desligar();
