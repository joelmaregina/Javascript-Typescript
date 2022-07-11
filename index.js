// **************** Revisão Arrrays ******************* 
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Antônia', 'Gabriel'];
// nomes[2] = 'Joelma';
// console.log(nomes); //[ 'Eduardo', 'Maria', 'Joelma', 'Antônia', 'Gabriel' ]
// delete nomes[1]; // Quando se quer eliminar um elemento do array mas não quer que os ídices sejam zerados
// console.log(nomes); //[ 'Eduardo', <1 empty item>, 'Joelma', 'Antônia', 'Gabriel' ]
// // String, Objetos, Funções, Números (Outra forma): const nomes = new Array( 'Eduardo', 'Maria', 'Joelma' )
// const novo = [...nomes]; //Copia o array "nomes" para "novo", e oq for feito em "novo" não alterará "Nomes"
// const removido = novo.pop(); // Remove o último item do Array
// console.log(nomes); // [ 'Eduardo', <1 empty item>, 'Joelma', 'Antônia', 'Gabriel' ]
// console.log(novo, removido); // [ 'Eduardo', undefined, 'Joelma', 'Antônia' ] Gabriel
// console.log(nomes.length); // 5
// const removido2 = nomes.shift(); // RRemove o primeiro item do Array e "puxa" os demais itens do array
// console.log(nomes, removido2); // [ <1 empty item>, 'Joelma', 'Antônia', 'Gabriel' ] Eduardo
// nomes.push('Pedro'); // Adciona itens ao final do Array
// console.log(nomes); // [ <1 empty item>, 'Joelma', 'Antônia', 'Gabriel', 'Pedro' ]
// nomes.unshift('Luiza'); // Adciona um iten no primeiro indice do Array e "empurra" os demais itens do array
// console.log(nomes); // [ 'Luiza', <1 empty item>, 'Joelma', 'Antônia', 'Gabriel', 'Pedro' ]
// const pedaco = nomes.slice(2, 4);
// console.log(pedaco); // [ 'Joelma', 'Antônia' ]
// const pedaco2 = nomes.slice(1, -1); // Remove o primeiro e o último
// console.log(pedaco2); // [ <1 empty item>, 'Joelma', 'Antônia', 'Gabriel' ]

// const nome = "Joelma Regina Silva";
// const nomes2 = nome.split(' ');
// console.log(nomes2); // [ 'Joelma', 'Regina', 'Silva' ]

// const juntar = [ 'Joelma', 'Regina', 'Silva' ];
// const juntando = juntar.join(' ');
// console.log(juntando); //Joelma Regina Silva

// **************** MÉTODO SPLICE ******************* 
const array = ['Maira', 'João', 'Luiza', 'Sidney' , 'Joana', 'Patricia', 'Manoel'];
// 1 elemento = Onde você vai começar a mexer;
// 2 elemento = Quantos elementos você quer remover do array;
// (...3) elementos = Elementos a serem adcionados no array;
// array.splice(Indice, Delete, Elem1, Elem2, Elem3...)
const removidosSplice = array.splice(5, 2);
// console.log(array, removidosSplice); // [ 'Maira', 'João', 'Luiza', 'Sidney', 'Joana' ] [ 'Patricia', 'Manoel' ]
const removidos2 = array.splice(3, 2, 'Fabiana', 'Rodrigo');
// console.log(array, removidos2); // [ 'Maira', 'João', 'Luiza', 'Fabiana', 'Rodrigo' ] [ 'Sidney', 'Joana' ]

//**************** CONCATENANDO ARRAYS ******************* 
const a1 = [1, 2];
const a2 = [3, 4];
const a3 = a1.concat(a2, [7, 8, 9], 'Joelma'); 
const a4 = [...a1, 'Joelma', ...a2, ...[7.6, 8.7], {nome: 'Joelma', idade: 29}];

// console.log(a3); // [ 1, 2, 3, 4, 7, 8, 9, 'Joelma' ]
// console.log(a4); // [ 1, 2, 'Joelma', 3, 4, 7.6, 8.7, { nome: 'Joelma', idade: 29 } ]

//********************** FILTER ************************* 
// Filter -> Sempre retorna um array com a mesma quantidade de elementos ou menos;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];
// const numFiltrado = [];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > 10) numFiltrado.push(numeros[i]);
// };
// console.log(numFiltrado); //[ 50, 80, 11, 22, 27 ]
// COM FILTER :
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados); //[ 50, 80, 11, 22, 27 ]
const numerosFiltrados2 = numeros.filter((valor, indice, array) => {
    // console.log(valor, indice, array)
    return valor > 24;
});
// console.log(numerosFiltrados2); //[ 50, 80, 27 ]


//Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Joelma', idade: '29'},
    { nome: 'Maria', idade: '64'},
    { nome: 'Francisco', idade: '85'},
    { nome: 'Luiz', idade: '6'},
    { nome: 'Ana', idade: '28'},
    { nome: 'Heitor', idade: '55'},
]

const nomesGrandes = pessoas.filter( objeto => objeto.nome.length >= 5);
const maisQue50 = pessoas.filter( objeto => objeto.idade >= 50);
const terminaComA = pessoas.filter( objeto => { return objeto.nome.toLowerCase().endsWith('a'); });

// console.log(nomesGrandes);
// console.log(maisQue50);
// console.log(terminaComA);

//*********************** MAP *************************** 
//IGUAL ao Filter, mas no final você irá alterar os valores do array em um novo array
// Altera os valores e retorna um array do mesmo tamanho do array original
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];
//Dobre os números
//const numerosEmDobro = numeros2.map((valor) => {return valor*2});
const numerosEmDobro = numeros2.map(valor => valor*2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas2 = [
    { nome: 'Joelma', idade: '29'},
    { nome: 'Maria', idade: '64'},
    { nome: 'Francisco', idade: '85'},
    { nome: 'Luiz', idade: '6'},
    { nome: 'Ana', idade: '28'},
    { nome: 'Heitor', idade: '55'},
]

const apenasNomes = pessoas2.map(obj => obj.nome);
const apenasIdade = pessoas2.map(function(obj){
    const newObj = {...obj}; //Copia para um novo OBJ para não alterar o array original
    delete newObj.nome;
    return newObj;
})
// OU :
const apenasIdade2 = pessoas2.map(obj => ({idade: obj.idade}));
const addID = pessoas2.map(function (obj, indice){
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});

// console.log(apenasNomes);
// console.log(apenasIdade);
// console.log(apenasIdade2);
// console.log(addID);
// console.log(pessoas2)

//*********************** REDUCE ***************************  
// Mais utilizada para reduzir o array a um único elemento
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

//Some todos os números (reduce);
const total = numeros3.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0); // 0 -> valor inicial do acumulador, se não for colocado o reduce usa o primeiro valor do array como oacumulador
// console.log(total);

// Retorne um array com os pares (Filter => MELHOR FAZER COM FILTER);
const pares = numeros3.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); 
// console.log(pares);

// Retorne um array com o dobro dos valores (Map => MELHOR FAZER COM MAP);
const dobro = numeros3.reduce(function(acumulador, valor){
    acumulador.push(valor *= 2);
    return acumulador;
}, []); 
// console.log(dobro);

// Retorne a pessoa mais velha:
const pessoas3 = [
    { nome: 'Joelma', idade: '29'},
    { nome: 'Maria', idade: '64'},
    { nome: 'Francisco', idade: '85'},
    { nome: 'Luiz', idade: '6'},
    { nome: 'Ana', idade: '28'},
    { nome: 'Heitor', idade: '55'},
]

const maisVelho = pessoas3.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; // Ao invés do Else
})
// console.log(maisVelho);

//******************* FILTER | MAP | REDUCE *******************
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];
// -> Filtrar os pares;
// -> Dobrar os valores;
// -> Reduzir (somar tudo)
const numPares = numeros4.filter(numeros => (numeros % 2 ===0));
// console.log(numPares); //[ 50, 80, 2, 8, 22 ]
const dobrarValores = numPares.map(pares => (pares * 2));
// console.log(dobrarValores); // [ 100, 160, 4, 16, 44 ]
const somarTudo = dobrarValores.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
})
// console.log(somarTudo); //324
// ======================== OU ==========================:
const filtraDobraSoma = numeros4
    .filter(numeros => numeros % 2 === 0)
    .map(pares => pares * 2)
    .reduce((acumulador, valor) => acumulador += valor);
// console.log(filtraDobraSoma); //324

//******************* FOR EACH *******************
const teste = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total2 = 0;
teste.forEach(valor => total2 += valor);
// console.log(total2); //450

//***************** REVISANDO OBJETOS *******************
const pessoa1 = {
    nome : 'Joelma',
    sobrenome : 'Silva'
}
const chave = 'sobrenome';
// console.log(pessoa1.nome) // Joelma
// console.log(pessoa1['sobrenome']); // Silva
// console.log(pessoa1[chave]); // Silva

const pessoa2 = new Object();
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Silva';
pessoa2.idade = 64;
//Se quiser deletar um atributo do objeto basta digitar: delete pessoa1.sobrenome
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome`)
}
pessoa2.getAnoNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1, pessoa2);
// console.log (pessoa2.getAnoNascimento());
// pessoa2.falarNome();
// for (let chave in pessoa2){
//     console.log(chave); // nome, sobrenome, idade, falarNome, getAnoNascimento
//     console.log(pessoa2[chave]); // Maria, Silva, 64, [Function (anonymous)], [Function (anonymous)]
// }

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    Object.freeze(this); // impede a criação de outros atributos, métodos, alteração dos valores dos atributos ou exclusão;
  }
  
  const p1 = new Pessoa('Priscila', 'Assis');
  p1.nome = 'Luisa'; // Muda o valor do nome da pessoa1 se o objeto não estiver congelado com o "Object.freeze(this)"
  // Muda pois não muda o endereço da memória do objeto, muda apenas o valor presente no endereço de memória setado
  const p2 = new Pessoa('Patricia', 'Assis');
  
//   console.log(p1);
//   console.log(p2);

//*****************  Object.defineProperty *******************
function Produto(nome, preco, descricao, estoque){
    this.nome = nome;
    
    Object.defineProperties(this, {
        preco: {
            enumerable : true,
            value : preco,
            writable : false, 
            configurable : false
        },
        descricao: {
            enumerable : true,
            value : descricao,
            writable : false, 
            configurable : false

        }
    } )
    Object.defineProperty(this, 'estoque', {
        enumerable : true, // mostra a chave
        value : estoque, // valor
        writable : false, // Impede(false) / Permite(true) a mudança do valor 
        configurable : false // Pode reconfigurar e apagar a chave? (Ex: com outra defineProperty que permitirá a mudança do valor (writable: true), ou usar o delete na propriedade)
    })
}

const produto1 = new Produto('Vestido', 59, 'Floral longo', 5);
// console.log(produto1);
// console.log(Object.keys(produto1)); //Mostra todas as chaves declaradas e as que são enumeráveis (enumerable : true)

//******  Object.defineProperty | GETTERS E SETTERS ******
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      configurable: true, // configurável
      get: function() {
        return estoquePrivado;
      },
      set: function(valor) {
        if (typeof valor !== 'number') {
          throw new TypeError('O estoque precisa ser um numero');
        }
        estoquePrivado = valor;
      }
    });
}
const produto2 = new Produto('Blusa', 59, 5);
// console.log(produto2); //Produto { nome: 'Blusa', preco: 59, estoque: [Getter] }
// produto2.estoque = 'Qualquer coisa'
// console.log(produto2.estoque); //TypeError: O estoque precisa ser um numero
produto2.estoque = 500;
// console.log(produto2.estoque); // 500

//**************  Métodos úteis para objetos  *****************
const item = { nome: 'Saia', preco: 65.90};
// const outroItem = {
//     ...item,
//     material: 'jeans'
// }
// ===== OU ======
const outroItem = Object.assign({}, item, {material : 'brin'})

outroItem.nome = 'Calça';
outroItem.preco = 69.0;
// console.log(item); // { nome: 'Saia', preco: 65.9 }
// console.log(outroItem); // { nome: 'Calça', preco: 69, material: 'brin' }
// console.log(Object.getOwnPropertyDescriptor(item, 'nome')); //{ value: 'Saia', writable: true, enumerable: true, configurable: true }
// // Para alterar, basta usar o Object.defineProperty

// console.log(Object.values(item)); //[ 'Saia', 65.9 ]
// console.log(Object.entries(item)); //[ [ 'nome', 'Saia' ], [ 'preco', 65.9 ] ]

for (let entrada of Object.entries(outroItem)){
    console.log(entrada)
}
// Resultado do For acima:
// [ 'nome', 'Calça' ]
// [ 'preco', 69 ]
// [ 'material', 'brin' ]

//*****************  Prototypes *******************
/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
  }
  // Pessoa.prototype === pessoa1.__proto__
  
  Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
  };
  
  const pessoaP1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
  const pessoaP2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
  const data = new Date(); // <-- Date = Função construtora
  
  console.dir(pessoa1);
  console.dir(data);