/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Joelma';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Regina');
  // console.log(pessoaDoNamespace); // PessoaDoNamespace { nome: 'Regina' }

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}

const constDoNamespace = 'Valor da const do namespace';

// const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Maria');
// console.log(pessoaDoNamespace); // PessoaDoNamespace { nome: 'Maria' }
// console.log(MeuNamespace.nomeDoNamespace); // Joelma
// console.log(MeuNamespace.OutroNamespace.nomeDoNamespace); // Nome no outro namespace
