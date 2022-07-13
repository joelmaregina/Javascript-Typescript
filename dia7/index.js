//***************** Manipulando Prototypes *******************
//new Object -> Object.prototype
const objA = {
    chaveA : 'A'
}

const objB = {
    chaveB : 'B'
}

const objC = new Object();
objC.chaveC = 'C';

//Encadeando prototipos: 
Object.setPrototypeOf (objB, objA);
Object.setPrototypeOf (objC, objB);
// console.log(objC.chaveB) // B
// console.log(objC.chaveA) // A

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

    Produto.prototype.desconto = function(percentual) {
        this.preco = this.preco - (this.preco * (percentual/100));
    }
    Produto.prototype.aumento = function(percentual) {
        this.preco = this.preco + (this.preco * (percentual/100));
    }
}

const prod1 = new Produto ('Bota', 110);
// prod1.desconto(10);
// console.log(prod1); // Produto { nome: 'Bota', preco: 99 }
prod1.aumento(100);
// console.log(prod1); // Produto { nome: 'Bota', preco: 220 }

const prod2 = {
    nome: 'Mochila',
    preco: 150
}
Object.setPrototypeOf(prod2, Produto.prototype); //Para que os métodos criados na função construtora Produto estejam disponíveis também para o objeto literal criado (prod2):
prod2.aumento(20);
// console.log(prod2); // Produto { nome: 'Mochila', preco: 180 }

const prod3 = Object.create(Produto.prototype, {
    preco: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 30
    },
    tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 38
    },
  });
//   prod3.aumento(50);
//   console.log(prod3); // Produto { preco: 45, tamanho: 38 }

  //******************* HERANÇA *********************
// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto2(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  Produto2.prototype.aumento = function(quantia) {
    this.preco += quantia;
  };
  Produto2.prototype.desconto = function(quantia) {
    this.preco -= quantia;
  };
  
  function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
  }
  Camiseta.prototype = Object.create(Produto2.prototype);
  Camiseta.prototype.constructor = Camiseta;
  
  Camiseta.prototype.aumento = function(percentual) { // Sobrescreve a função de aumento do produto
    this.preco = this.preco + (this.preco * (percentual / 100));
  };
  
function Mousepad(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
          return estoque;
        },
        set: function(valor) {
          if (typeof valor !== 'number') return; // Náo altera se não for number
          estoque = valor;
        }
      });
}

Mousepad.prototype = Object.create(Produto2.prototype);
Mousepad.prototype.constructor = Mousepad;
  
  const produto = new Produto('Gen', 111);
  const camiseta = new Camiseta('Regata', 7.5, 'Preta');
  const mousepad = new Mousepad('IBM', 25, 'EVA', 5);
//   mousepad.estoque = 'a'; // Náo alteraria pois não é number
mousepad.estoque = 100 // Alteraria pois é number
  
// console.log(mousepad.estoque);
// console.log(mousepad);
// console.log(camiseta);
// console.log(produto);

//************** Exercício - VALIDANDO UM CPF ****************
// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

//*********************** Solução 1 **************************
let cpf = '070.987.720-03';
let cpfLimpo = cpf.replace(/\D+/g, '');
let multi1 = 0;
let multi2 = 0
let soma1 = 0;
let soma2 = 0;

//cpfLimpo-1 = 10
for(let i = 0, j = cpfLimpo.length-1; i < cpfLimpo.length - 2; i++, j--){
    multi1 = cpfLimpo[i] * j;
    soma1 += multi1;
}
let primeiroD = 11 - (soma1 % 11);
if (primeiroD > 9) primeiroD = 0
cpfComOPrimeiroDigito = cpfLimpo.substring(0,9).concat(primeiroD);

for(let i = 0, j = cpfComOPrimeiroDigito.length+1 ; i < cpfComOPrimeiroDigito.length; i++, j--){
  multi2 = cpfLimpo[i] * j;
  soma2 += multi2;
}
let segundoD = 11 - (soma2 % 11);
if (segundoD > 9) segundoD = 0
cpfCompleto = cpfComOPrimeiroDigito.concat(segundoD);

// if( cpfCompleto === cpfLimpo){
//   console.log(`O CPF avaliado é válido. CPF digitado: ${cpfLimpo} CPF após a verificação = ${cpfCompleto}`);
// } else {
//   console.log(`O CPF avaliado NÃO É válido! CPF digitado: ${cpfLimpo} CPF após a verificação = ${cpfCompleto}`);
// }

//************************* Solução 2 ****************************
//********************** USANDO PROPERTY *************************
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial2 = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial2);
  const digito2 = this.criaDigito(cpfParcial2 + digito1);

  const novoCpf = cpfParcial2 + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf2 = new ValidaCPF('070.987.720-03');

// if(cpf2.valida()) {
//   console.log('Cpf válido');
// } else {
//   console.log('Cpf inválido');
// }

//************************* POLIMORFISMO *************************
// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente. Seu saldo é de: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Sobrescrita do método sacar
CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
// cc.depositar(10);
// cc.sacar(110);
// cc.sacar(1);

// console.log();

const cp = new CP(12, 33, 0);
// cp.depositar(10);
// cp.sacar(10);
// cp.sacar(1);

//**************** Factory Functions + Prototypes ****************
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Joana', 'Pereira');
const p2 = criaPessoa('Maria', 'Silva');
// console.log(p2);

//************************ OBJECT MAP *************************
const pessoas = [
  {id: 3, nome: 'Ciaran'},
  {id: 2, nome: 'Joelma'},
  {id: 1, nome: 'Regina'}
]

const novasPessoas = {}; // Imprime na ordem "correta", não na ordem original da declaração
for (const pessoa of pessoas){
  const {id} = pessoa;
  novasPessoas[id] = {...pessoa}
}

const novasPessoas2 = new Map(); // Imprime na ordem original da declaração
for (const pessoa of pessoas){
  const {id} = pessoa;
  novasPessoas2.set(id, {...pessoa})
}

for(const [identifier, {id, nome}] of novasPessoas2){
  // console.log(identifier, id, nome);
}

// .keys() = 3, 2, 1 | .values() { id: 3, nome: 'Ciaran' }, { id: 2, nome: 'Joelma' }, { id: 1, nome: 'Regina' }
for(const pessoas of novasPessoas2.values()){ 
  // console.log(pessoas);
}

// console.log(novasPessoas2);


//********************** CRIANDO CLASSES **************************
//**************************** Class ******************************
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}
//********************** Função Construtora ************************
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
};

const pessoa1 = new Pessoa('Joelma', 'Assis');
const pessoa2 = new Pessoa2('Joelma', 'Silva');

//********************** GETTERS E SETTERS ************************
const _velocidade = Symbol('velocidade'); // Symbol SEMPRE serão diferentes
class Carro{
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor){
    if (typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade(){
    return this[_velocidade]; //Retorna a velocidade real/ Máxima setada (100), independentemente se a pessoa tentar colocar uma velocidade maior
  }

  acelerar(){
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar(){
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

c1.velocidade = 99;

// for(let i = 0; i <= 200; i++){
//   c1.acelerar();
// }
// console.log(c1);

//**************************************************************/
class Pessoa3 {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const pessoaUm = new Pessoa3('Patricia', 'Luisa');
pessoaUm.nomeCompleto = 'Pedro Silva Silva';
// console.log(pessoaUm.nome);
// console.log(pessoaUm.sobrenome);


//********************** HERANÇA COM CLASSES ************************
class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }

  falaOi() {
    console.log('Oi');
  }

  static criador(nome, temWifi) {
    return new Tablet.prototype.constructor(nome, temWifi);
  }
}
const s1 = new Smartphone('Pocofone', 'Dourado', 'X3');
// console.log(s1);
const t1 = Tablet.criador('iPad', true);

//**************** MÉTODOS E INSTÂNCIAS ESTÁTICOS ******************
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância - Se refere a instância e tem acesso aos dados ao instanciar (Criar) o objeto
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático 
  static soma(x, y) {
    console.log(this);
  }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); //Instância
ControleRemoto.soma(); //Estático - Se refere á classe ( Não é instanciado, por isso não de tem acesso aos outros atributos da classe)
