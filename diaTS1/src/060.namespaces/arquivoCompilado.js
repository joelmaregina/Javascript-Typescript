/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Joelma';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Regina');
    // console.log(pessoaDoNamespace); // PessoaDoNamespace { nome: 'Regina' }
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome no outro namespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
// const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Maria');
// console.log(pessoaDoNamespace); // PessoaDoNamespace { nome: 'Maria' }
// console.log(MeuNamespace.nomeDoNamespace); // Joelma
// console.log(MeuNamespace.OutroNamespace.nomeDoNamespace); // Nome no outro namespace
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
