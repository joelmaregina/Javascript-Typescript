const body0 = document.querySelector('body'); // HTMLBodyElement | null
// body0.style.background = 'red'; // ERRO(red): Object is possibly 'null'.

/***********  RECOMENDADO ***********/
// Condicional - Se você tem dúvidas se o elemento está presente/disponível na página
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion - Se você tem total certeza que o elemento está presente/disponível na página
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement - Para permitir especificar mais o elemento e facilitar o acesso às funçoes do elemento
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/*********** NÃO RECOMENDADO ***********/
// Type assertion
// const body4 = document.querySelector('body') as number; // ERRO(red): Type 'HTMLBodyElement' is not comparable to type 'number'
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!) - Afirmar que não vai ser nulo
const body2 = document.querySelector('body')!; // ERRO(blue Forbidden non-null assertion - eslint
body2.style.background = 'red';
