let x: unknown;

x = 100;
x = 'Joelma';
x = 900;
x = 10;
const y = '800';

//unknow (diferente de any) requer que seja feita uma checagem dos tipos dos valores antes da realização de operações com ela:
if (typeof x === 'number' && typeof y === 'number') console.log(x + y);
else console.log('Impossível realizar uma conta sem números');
