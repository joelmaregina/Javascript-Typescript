// const h1 = document.querySelector('.container h1');
// let data = new Date;

// function getDayOfWeek(diaSemana){
//     let diaSemanaTexto;
//     switch(diaSemana){
//         case 0 :
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1 :
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2 :
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3 :
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4 :
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto;  
//     }
// }

//******* O R ***********
// function getDayOfWeek(diaSemana){
//     const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
//}

// function getMonth(numMes){
//     let diaMesTexto;
//     switch(numMes){
//         case 0 :
//             diaMesTexto = 'janeiro';
//             return diaMesTexto; 
//         case 1 :
//             diaMesTexto = 'fevereiro';
//             return diaMesTexto;
//         case 2 :
//             diaMesTexto = 'março';
//             return diaMesTexto;
//         case 3 :
//             diaMesTexto = 'abril';
//             return diaMesTexto
//         case 4 :
//             diaMesTexto = 'maio';
//             return diaMesTexto;
//         case 5:
//             diaMesTexto = 'junho';
//             return diaMesTexto;
//         case 6:
//             diaMesTexto = 'julho';
//             return diaMesTexto;
//         case 7:
//             diaMesTexto = 'agosto';
//             return diaMesTexto;
//         case 8:
//             diaMesTexto = 'setembro';
//             return diaMesTexto;
//         case 9:
//             diaMesTexto = 'outubro';
//             return diaMesTexto
//         case 10:
//             diaMesTexto = 'novembro';
//             return diaMesTexto;
//         case 11:
//             diaMesTexto = 'dezembro';
//             return diaMesTexto;
//     }
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(date){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDayOfWeek(diaSemana);
//     const nomeMes = getMonth(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
//         ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }
// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
let data = new Date;
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: `full`, timeStyle: `short`});

