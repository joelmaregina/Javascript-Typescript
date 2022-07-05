//************ ? - OPERADOR TERNÁRIO ***************/
//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Preta = fallback (caso o usuário não tenha setado uma cor)

// console.log(nivelUsuario, corPadrao);

if(pontuacaoUsuario >= 1000){
    // console.log('Usuario VIP')
} else {
    // console.log('Usuário normal')
}

//************** OBJETO DATE ******************/

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data1 = new Date(0 + tresHoras + umDia); // new Date (0) = 01/01/1970 -Timestamp unix ou época unix

const data2 = new Date(2019, 3, 20, 15, 14, 27, 500); //3 = Abril, pois os meses são 0-11 Sat Apr 20 2019 15:14:27 GMT-0300 (Brasilia Standard Time)
//ano, mes, dia, horas, minutos, segundos, milésimos de segundo
const data3 = new Date('2018-08-06 22:30:06.100') // Mon Aug 06 2018 22:30:06 GMT-0300 (Brasilia Standard Time)
// console.log('Dia', data.getDate()); //Dia 6 (acima)
// console.log('Mês', data.getMonth() + 1); //Mês 8 
// console.log('Ano', data.getFullYear()); //Ano 6 
// console.log('Hora', data.getHours()); //Hora 6 
// console.log('Minuto', data.getMinutes()); //Minuto 6 
// console.log('Segundo', data.getSeconds()); //Segundo 6 
// console.log('ms', data.getMilliseconds()); //ms 100
// console.log('Dia da semana', data.getDay()); //Dia da semana 1 (0 -> Domingo | 6 -> Sabado)
// console.log(data.toString());

//  console.log(Date.now()); //1656352461361 => Do marco zero até hoje em ms
 const novaData = Date(1656352461361);
//  console.log(novaData); //Data/Hora de hoje

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  }
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  
  const data4 = new Date();
  const dataBrasil = formataData(data2);
//   console.log(dataBrasil);

//************** SWICTH-CASE ****************/

function getDayOfWeek(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0 :
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; //Dentro de uma função o return pode ser usado ao invés do break
        case 1 :
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2 :
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3 :
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4 :
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default: 
            diaSemanaTexto = '*';  
    }
}
const data5 = new Date('1989-10-07 00:00:00');
const diaSemana = data3.getDay();
const diaSemanaTexto = getDayOfWeek(diaSemana);
// console.log(diaSemana, diaSemanaTexto);

//***************** FOR CLÁSSICO *********************
for (let index = 0; index < 10; index++) {
    const par = index % 2 === 0 ? 'par' : 'impar';
    // console.log(index, par);
}
// console.log('**************************************')

//***************** WHILE | DO WHILE ******************
function random(min, max) {
    const r = Math.random()* ( max - min ) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
    // console.log(rand);
}
//***************** EXERCÍCIOS LÓGICA ******************
// Escreva uma função que recebe 2 números e retorne o maior deles
function comparacao(a, b){
    // if(a > b) return a
    // return b;
    // OU:
    return a > b ? a : b;
}
// OU:
const comparacao2 = (a, b) => a > b ? a : b; 
// console.log(comparacao(7, 9));
// console.log(comparacao2(5, 12));

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne "true" se a imagem estiver no modo paisagem.
function ePaisagem (altura, largura){
    return (altura < largura && altura !== largura) ? true : false;
}
// console.log(ePaisagem(15, 15)); //imagem quadrada

const ePaisagem2 = (largura, altura) => (altura < largura && altura !== largura) ? true : false;
// console.log(ePaisagem(7, 10));

//Escreva uma função que recebe um número e retorne o seguinte:
// Numero é divis[ivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número 
// Use a função com números de 0 a 100
function fizzBuzz (numero){
    if (typeof numero !== 'number') return NaN; //Not a number
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
}

for(let i = 0; i<= 100; i++){
    console.log(i, fizzBuzz(i))
}
console.log(fizzBuzz('a')); //NaN