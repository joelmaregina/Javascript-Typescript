const nome = 'Regina';
const sobrenome = 'Silva';
const idade = 29;

function soma(x, y){
    return x + y;
}

export{ nome, sobrenome, idade, soma }; //pode exportar om um nome diferente, exatamente como a importação:
//ex: export{ nome as nome2 }
//Neste caso, na hora da importação é necessário o usar o nome da variável como foi exportada: import{ nome2 }

//Outra forma de export:
export const nome3 = 'Maria';
export const sobrenome2 = 'Silva';
export const idade2 = 64;
const cpf = '012.345.567.-89' //Como não tem 'export' não será exportada caso o dev utilize 'import * from(...)'

// Criando um default(padrão) - Só pode ter um por arquivo/módulo
export default function soma2(x, y){
    return x + y;
}
//outraforma de exportar um default:
// export{ soma as default }

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}