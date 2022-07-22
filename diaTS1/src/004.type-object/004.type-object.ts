const objetoA: {
  readonly chaveA: string; //readonly: não permite alterar o valor da chave
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave'; //Não é possivel esse adição caso o tipo esteja sendo inferido pelo typescript
objetoA.chaveD = 'Nova chave 2';

console.log(objetoA);
