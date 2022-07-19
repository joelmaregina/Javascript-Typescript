import { nome as nome2, sobrenome, idade, soma } from './modulo1'
import { nome3, sobrenome2, idade2, soma2, Pessoa } from './modulo1'
//Para importar tudo de uma vez só: 
// importe * as MeuModulo from './modulo1'

const nome = 'Joelma';

console.log(nome, nome2, sobrenome, idade);
console.log(soma(6, 16));
console.log(nome3, sobrenome2, idade2);


// Importando o default:
import qualquerNome from './modulo1';
//import qualquerNome, {some, sobrenome, idade, soma} from '/modulo1'
// Usando o default:
console.log(qualquerNome(1, 7));



const p1 = new Pessoa('Luiza', 'Silva');
console.log(p1);