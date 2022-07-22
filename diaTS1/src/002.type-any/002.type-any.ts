// Utilizar any apenas em último caso - fica mais dificil a detecçao de erros
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
