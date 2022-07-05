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

// ************* DECLARANDO FUNÇOES **********************
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
