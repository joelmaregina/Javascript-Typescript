const nome = 'Joelma';
let idade = '29';
const obj = {nome, idade};
const novoObj = {... obj};
console.log(novoObj);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}