//**************** TRY | CATCH | FINALLY ********************* 
//************* Tratamento e lançamento de erros ************* 
try{
    // console.log(naoExisto);
} catch (e){ // e = erro | pode usar outra expressão
    // console.log('variável naoExisto não existe');
    // console.log(e); //ReferenceError: naoExisto is not defined (...) (Não exibir isso em aplicações reais (exposição de dados internos, pode ser perigoso))
} 
//------------------------------------------------------------
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números')
    }
    return x + y;
}

try {
    // console.log(soma(1, 2));
    // console.log(soma('1', 2));
} catch(e){
    // console.log(e); // Não usar assim
    console.log('Alguma coisa mais amigável');
}
//-----------------------------------------------------------
try{ // É executada quando não há erros
    // console.log(e);
    // console.log('Abri um arquivo');
    // console.log('Manipulei o arquivo e gerou um erro'); // A linha abaixo não seria executada
    // console.log('Fechei o arquivo');
} catch{ // É executada quando há erros
    console.log('Tratando o erro');   
} finally { // Sempre é executado(Com erro ou sem erro)
    // console.log('FINALLY: Eu sempre sou executado (ex: Fechei o arquivo)');
}

console.log("O código comentado abaixo não funciona:")
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//       throw new TypeError('Esperando instância de Date.');
//     }
  
//     if (!data) {
//       data = new Date();
//     }
  
//     return data.toLocaleTimeString('pt-BR', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: false
//     });
// }
// const hora = retornaHora();
// console.log(hora); // Não é

//*********** SET TIMEOUT E SET INTERVAL***********/
function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    // console.log(mostraHora());
}, 1000); //Mostra a hora de segundo a segundo

//Interrompe a execução da funçao definida acima (guardada na variável 'timer'), após o tempo definido nela:
setTimeout(function(){
    clearInterval(timer);
}, 4000);

//Exibe a mensagem após 5 segundos:
setTimeout(function(){
;
}, 5000);

// ************* MANEIRAS DE DECLARAR FUNÇÕES ************* 
// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
//   console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
//   console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
//   console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    // console.log('Estou falando...');
  }
};
obj.falar();

// ************* PARÂMETROS DAS FUNÇÕES ************* 
//arguments disponível apenas em em functions declaradas com "function"
//Ou seja não funciona em arrow functions
// arguments sustenta todos os argumentos enviados mesmo sem parâmetros declarados na declaração da função
function funcao(a, b, c){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c); 
}
// funcao( 1, 2, 3, 4, 5, 6, 7); // retorna : 28 1 2 3

function soma(a, b = 2, c = 4){
    // b = b || 2;
    // c = c || 4;
    console.log(a + b + c);
}
// soma(2); //retorna 8 - Pois como os valores de b e c não foram setados, o Javascript usa os valores padrões declarados na declaração da função;
// soma(2, '', 20) // Retorna: 220 - Como tem uma string, o JS concatena;
// soma(2, undefined, 20); // Retorna: 24 - Usa o valor padrão de "b"; - Não usar;
// soma(2, null, 20); // Retorna 22 - Null é lido como se fosse 0 (zero);

function conta(operador, acumulador, ...numeros){ // ...numeros = rest operator
    //rest operator deve ser sempre o último parâmetro da função;
    // rest operator funciona com outras funções como as arrow functions;
    console.log(operador, acumulador, numeros);
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log (acumulador);
}
// conta ('+', 0, 20, 30, 40, 50); // + 0 [ 20, 30, 40, 50 ]
// // 140
// conta ('-', 0, 20, 30, 40, 50); // - 0 [ 20, 30, 40, 50 ]
// // -140
// conta ('*', 1, 20, 30, 40, 50); // * 0 [ 20, 30, 40, 50 ]
// 1200000

// ***************** CLOSURES ******************* 
// Habilidade que a função tem de acessar seu escopo léxico
function retornaFuncao(nome){
    return function (){
        return nome;
    }
}
const funcao1 = retornaFuncao();
const funcao2 = retornaFuncao('Joelma');
const funcao3 = retornaFuncao('Regina');
// console.log(funcao1, funcao2(), funcao3()); //[Function (anonymous)] Joelma Regina

// ************** FUNÇÕES DE CALLBACK ***************** 
// Funções que são executadas quando uma ação ocorre
function rand(min = 1000, max = 3000) { // Para simular o tempo de retorno de uma requisiçao de front-end
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }
  
  // Callback é utilizado para garantir a ordem da execução de determinadas etapas (Por ex: A espera do retorno de uma requisição)
  function f1(callback) {
    setTimeout(function() {
    //   console.log('f1');
      if (callback) callback();
    }, rand());
  }
  
  function f2(callback) {
    setTimeout(function() {
    //   console.log('f2');
      if (callback) callback();
    }, rand());
  }
  
  function f3(callback) {
    setTimeout(function() {
    //   console.log('f3');
      if (callback) callback();
    }, rand());
  }
  
  f1(f1Callback);
  function f1Callback() {
    f2(f2Callback);
  }
  function f2Callback() {
    f3(f3Callback);
  }
  function f3Callback() {
    // console.log('Olá mundo!');
  }

// ******** IIFE - Immediately Invoked Function Expression *********
// *********************** FUNÇÕES IMEDIATAS *********************** 
// Funções anônimas criadas dentro de parênteses que não impactam no escopo global
//  Também são executadas logo após sua declaração com "()" ao final (function(){}())
(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }
  
    function falaNome() {
    //   console.log(criaNome('Luiz'));
    }
  
    falaNome();
    // console.log(idade, peso, altura);
  
  })(30, 80, 1.80);

// ******************* FACTORY FUNCTION ******************* 

  function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter //Permite acessar o valor como se fosse um atributo (não como um método/função)
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter // Permite a inserção manual de valor através da declaração da função
      set nomeCompleto(valor) {
        valor = valor.split(' '); // A cada espaco o nome recebido (valor) será dividido a cada espaço e retornará um array
        this.nome = valor.shift(); // Remove o primeiro elemento do array para a variavel Home
        this.sobrenome = valor.join(' '); //Junta os valores em valor (deixa de ser um array) e adciona esopaços entre eles
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está falando sobre ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Joelma', 'Assis', 1.6, 50);
  const p2 = criaPessoa('Priscila', 'Ferreira', 1.90, 57);
  const p3 = criaPessoa('Roque', 'Bittencourt', 1.5, 110);
  
//   console.log(p1.imc); //19.53 - É possivel acessar como um atributo (não uma função) por causa da palavra "get"usada acima
//   console.log(p2.imc); //1 5.79
//   console.log(p3.imc); // 48.89
//   console.log(p3.fala()); //Roque está falando sobre NADA.
//   console.log(p2.fala("Say Yes To The Dress")); //Priscila está falando sobre Say Yes To The Dress.
//   console.log(p1.nomeCompleto); // Joelma Assis - É possivel acessar como um atributo por causa da palavra "set" usada acima

// **************** FUNÇÕES RECURSIVAS ******************* 
// "Funções que se chamam novamente"

function recursiva(max){
    // console.log(max); // Imprime de 0 até 10
    if (max >= 10) return;
    max++;
    recursiva(max);
}
recursiva(0);

// **************** FUNÇÕES GERADORAS ******************* 
function* geradora1(){
    //Codigo qualquer ...
    yield 'valor 1'; //quase como o return
    //Codigo qualquer ...
    yield 'valor 2'; //quase como o return
    //Codigo qualquer ...
    yield 'valor 3'; //quase como o return
}
const g1 = geradora1();
console.log(g1); //Object [Generator] {}
// console.log(g1.next()); //{ value: 'valor 1', done: false }
// console.log(g1.next().value); //valor 1
// console.log(g1.next().value); //valor 2
// console.log(g1.next().value); //valor 3
// console.log(g1.next()); //{ value: undefined, done: true 
// for (let valor of g1){
//     console.log(valor);
// }

function* geradora2(){
    let i = 0
    while(true){  //infinito
        yield i;
        i++;
    }
}
// const g2 = geradora2();
// console.log(g2.next().value); // 0
// console.log(g2.next().value); // 1
// console.log(g2.next().value); // 2
// console.log(g2.next().value); // 3
// console.log(g2.next().value); // 4
// console.log(g2.next().value); // 5

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for(let valor of g4){ // 0 1 2 3 4 5
    console.log(valor)
}

function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    };

    //Se colocar um return aqui, o próximo yield não seria executado;
        
    yield function(){
        console.log('Vim do y2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

