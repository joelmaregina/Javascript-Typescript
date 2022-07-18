//********************** PROMISSES *************************
// Em substituição á funções de callback
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aguarde(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// aguarde('Frase 1', rand(1, 3))
// .then(resposta => {
//     console.log(resposta);
//     return aguarde('Buscando dados da BASE', rand(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     return aguarde(22222, rand(1, 3));
//     //return aguarde(Tratando os dados da base, rand(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//   }).then(() => {
//     console.log('Exibe dados na tela');
//   })
//   .catch(e => {
//     console.log('ERRO:', e);
//   });

// console.log('Isso aqui será exibido antes de qualquer promisse.');

//****************** MÉTODOS ÚTEIS PARA PROMISSES ********************
//* Promisse.all | Promisse.race | Promisse.resolve | Promisse.reject *
function wait(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){
             reject('Bad value');
             return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promisse');
        }, tempo);
    });
}

const promises = [
    '1 valor',
    wait('Promisse 1', 3000),
    wait('Promisse 2', 500),
    wait('Promisse 3', 1000),
    //wait(1000, 1500),
    'Outro valor'
]

// =============== Promisse.all ===================
// Promise.all(promises) // Entrega quando todos os valores estão prontos
// .then( function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });

const promises2 = [
    wait('Promisse 1', 3000),
    wait('Promisse 2', 500),
    wait('Promisse 3', 1000),
]

// =============== Promisse.race ===================
// Promise.race(promises2) // Entrega o primeiro valor pronto = PROMISSE 2 - Passei na Promisse
// .then( function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}
  
// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log('ERRO', e));


//*********************** ASSYNC / AWAIT **************************
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
    
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
        }, tempo);
    });
}
    
// esperaAi('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));
    
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', 1000);
        console.log(fase1);

        // setTimeout(function() { //Se não tivesse o await acima
        // console.log('Essa promise estava pendente', fase1);
        // }, 1100);

        const fase2 = await esperaAi('Fase 2', rand(1, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand(1, 3));
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();

// Promise { <pending> }
const teste2 = esperaAi('qlq', 5000);
console.log(teste2); // Promise { <pending> } - Pois ela ainda está executando, não esperamos ela terminar e já a chamamos 
// Estados de uma promisse: Pending, Fulfilled, Rejected

//***************** XMLHttpRequest + PROMISSES ********************
