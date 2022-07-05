// STRING:
// console.log('Hello "World"'); //String - Tipagem dinâmica
// console.log("Hello 'World'");
// console.log(`'Hello' "World"`);
// let umaString = "Um \"texto\"";
// console.log(umaString); //=> Um "texto" 
// let umaString2 = "Um texto";
// console.log(umaString2[4]); //=> e
// console.log(umaString2.charAt(4)); //=> e
// console.log(umaString2.indexOf('texto')); //=> 3
// console.log(umaString2.indexOf('o', 3)); //=> Vai comecar a procurar o 'o' iniciando do indice 3 da esq pra direita => 7
// console.log(umaSString2.lastIndexOf('o', 3)); //=> Vai comecar a procurar o 'o' iniciando do indice 3 da dir pra esquerda => -1
// // exemplo acima, se colocar 'm' => 1
// umaString2.match(/[a-z]/); 
// umaString2.search(/[a-z]/); //retorna o indice nas expressões regulares
// console.log(umaString2.replace('Um', 'Outro' )); // Outro texto
// console.log(umaString2.replace(/texto/, 'artigo')) // /Um artigo

// let luiza = 'cama, carro, coelho'
// console.log(luiza.replace(/c/, 't')); // Substitui apenas no primeiro: tama, carro, coelho
// console.log(luiza.replace(/c/g, 't')); // Substitui em toda string: tama, tarro, toelho
// console.log(luiza.length); // começa de 1
// console.log(luiza.slice(1, 5)); //ama
// console.log(luiza.slice(-3)) //lho (-3 => luiza.length -3)
// console.log(luiza.slice(-6, -1)) //lho (-3 => luiza.length -3) //coelh
// // Código acoma é uma forma mais rezumida do codigo abaixo
// console.log(luiza.substring(luiza.length - 6, luiza.length -1)) //lho (-3 => luiza.length -3) //coelh
// console.log(luiza.split(' ')); //[ 'cama,', 'carro,', 'coelho' ]
// console.log(luiza.split('c')); //[ '', 'ama, ', 'arro, ', 'oelho' ]
// console.log(luiza.split('c', 3)); // 3 resultados = [ '', 'ama, ', 'arro, ' ]
// console.log(luiza.toLowerCase());
// console.log(luiza.toUpperCase());

// console.log(123456, 15.28937498, 'Hello World') ;

// console.log('Me nome é "JOELMA". Estou aprendendo JavaScript às', 10, 'da manhã');

// let nome = 'Joelma';

// console.log(nome, ' está fazendo está na faculdade');
// console.log('O estágio de ', nome, ' começa ás 9h');
// console.log('Será perto do natal quando as aulas de ', nome, 'acabarem');

const nome = 'Joelma';
const sobrenome = 'Silva';
const idade = 29;
const peso = 54;
const altura = 1.62;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = (2022 - idade);
let frase = 'Texto: ';

//FORMAS DE CONCATENAÇÃO: 
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos,  pesa' + peso + ' kg');
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`); //template strings - Melhor forma
console.log(nome, "nasceu em", anoNascimento);
console.log(frase.concat(nome, ' tem ', idade, ' anos '));

let nome2; //undefined -> Não aponta pra local nenhum na memória
let sobrenome2 = null // -> Não aponta pra local nenhum na memória - Quando a pessoa quer explicitamente que a variável náo aponte pra lugar nenhum na memória (Ex: Opção de mudança de cor de fundo)
//Tipos de dados primitivos: String(typeof string), Number(typeof number), Undefined (typeof undefined), Nulo(typeof object (bug -> Não é de fato um objeto)), Boolean(typeof boolean) e symbol (Para ver o tipo 'typeof')

// NaN - Not A Number (Ex: let multi = 10 * 'Joelma')
// parseInt(Converte string números para inteiro)
// parseFloat(Converte string números para float)
//ou
const num2 = Number('16.9')

// ** potenciação

// Precedência dos operadores aritiméticos:
/*
1 : () - O que estiver dentro dos parenteses
2 : ** - potenciação
3 : * / %
4 : + - 
*/

// Métodos do objeto Window 
// ** Metodos = funções dentro de um objeto
// alert() == window.alert()
// window.confirm() (aparece 2 botões Cancelar(boolean false) e Ok(boolean true) no Alert)
//window.prompt(Alert com input)


let varA = 'a'; //B
let varB = 'b'; //C
let varC = 'c'; //A
let aux;

// aux = varA;
// varA = varB;
// varB = varC;
// varC = aux;
// OU :
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

//NUMBER:
let numero1 = 150;
let numero2 = 2.5;
let numero3 = 68.16099206108

// console.log(numero1.toString() + numero2); // altera a variável apenas aqui
// console.log(numero1.toString(2)); //altera a variável para valor bin[ario
// numero1 = numero1.toString(); // altera o tipo da variavel para string
// console.log(typeof numero1); // number
//console.log(numero3.toFixed(3)); //arredonda o número até 3 casas decimais
// console.log(Number.isInteger(numero1)); //true
// let temp = numero1 * 'Ola';
// console.log(temp); //NaN
// console.log(Number.isNaN(temp)); //true

let n1 = 0.7;
let n2 = 0.1;

n1 += n2; // Esperado: 0.8 | Resultado: 0.7999999999999999
n1 += n2; // Esperado: 0.9 | Resultado: 0.89999999999999999
n1 += n2; // Esperado: 1.0 | Resultado: 0.99999999999999999
// Impreciso pois -> IEEE 754-2008
console.log(n1); // 0.999...
// Para resolver a imprecisão acima usando Number ou parseFloat:
n1 = Number(n1.toFixed(2));
console.log(n1); //1
console.log(Number.isInteger(n1)); //true


// O OBJETO Math

let numb1 = 6.12198;
let numb2 = Math.floor(numb1); //Arredonda pra baixo, ignora oq tem depois da virgula
console.log(numb2); //=> 6
let numb3 = Math.ceil(numb1); // Arredonda pra cima
console.log(numb3); //=> 7
let numb4 = Math.round(numb1);
console.log(numb4); //=> 6 (até x.49 arredonda pra baixo, a partir de 0.50 arrendonda pra cima)
console.log(Math.max(1,3,5,7,8,9,-40,2018,33,-2022)); //Retorna o valor máximo = 2018
console.log(Math.min(1,3,5,7,8,9,-40,2018,33,-2022)); //Retorna o valor mínimo = -2022
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio); //Gera números aleatórios entre 0 e 1;
console.log(Math.pow(2, 10)); //2ˆ10 = 1024 
console.log(2 ** 10); //2ˆ10 = 1024 
let numb5 = 9;
console.log(numb5 ** (1/2)); //Raíz quadrada de 3 => 3
//console.log(100/0) //=> Infinity - Ou seja, em javascript não dá erro como em outras linguagens.
