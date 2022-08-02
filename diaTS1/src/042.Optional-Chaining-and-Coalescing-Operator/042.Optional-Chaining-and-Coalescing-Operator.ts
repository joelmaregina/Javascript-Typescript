// Encadeamento opcional
// e
// Operador de coalescência nula (Checa os "Não valores: (null || undefined)")

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1 - Oxe, não exixte data.'); //1 - Oxe, não exixte data.
console.log(undefined ?? '2 - Oxe, não exixte data.'); //2 - Oxe, não exixte data.
console.log(null ?? '3 - Oxe, não exixte data.'); //3 - Oxe, não exixte data.
console.log(false ?? '4 - Oxe, não exixte data.'); // false
console.log('' ?? '5 - Oxe, não exixte data.'); //
console.log(0 ?? '6 - Oxe, não exixte data.'); // 0
