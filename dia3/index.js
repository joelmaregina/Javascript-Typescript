const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = classificaImc(imc);

    console.log(imc, classificacaoImc);
    console.log(classificacaoImc);

    const msg = `Seu IMC é ${imc} (${classificacaoImc}).`;
    setResultado(msg, true);
})

function classificaImc (imc) {
    const classificacao = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return classificacao[5];
    if (imc >= 34.9) return classificacao[4];
    if (imc >= 29.9) return classificacao[3];
    if (imc >= 24.9) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc < 18.5) return classificacao[0];
}

function getImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('red');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

// let altura = Number(document.getElementById("#altura"));
// let peso = Number(document.getElementById("#peso"));
// let botaoCaucular = document.querySelector("#caucular");

// function validaPeso(peso){
//     if(peso >= 0 && peso < 600){
//         return true;
//     } else {
//         return false;
//     }
// }

// function validaAltura(altura){
//     if(altura >= 0 && altura < 2.8){
//         return true;
//     } else {
//         return false;
//     }
// }

// function cauculaImc(){
//     let imc = 0;
//     imc = peso / (altura * altura);
//     return imc.toFixed(2);
// }

// botaoCaucular.addEventListener("click", function(){
//     cauculaImc ();
//     console.log(imc);
// })


/*FALSY:
* false - Falso literal
0
''  ""  ``  => string vazia
null / undefined
NaN
*/
// console.log('Luiz' && 'Maria'); //Maria
// console.log('Luiz' && false && 'Maria'); // false
// console.log('Luiz' && '' && 'Maria'); // imprime "nada"
// console.log('Luiz' && undefined && 'Maria'); // undefined
// console.log('Luiz' && NaN && 'Maria'); // NaN

// OR
// console.log(0 || false || null || 'Joelma Regina'|| true); // Retorna o primeiro valor verdadeiro => Joelma Regina

// AND
// function falaOi (){
//     return  'Oi';
// }
// let vaiExecutar; //undefined (FALSY)
// console.log(vaiExecutar && falaOi()); //undefined

// const a = 0;
// const b = null;
// const c = 'false'; // É uma string, será o que será exibido (true)
// const d = false;
// const e  = NaN;
// console.log(a || b || c || d || e) //false
