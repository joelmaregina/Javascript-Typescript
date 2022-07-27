// public - Acessivel dentro da classe, fora da classe, e em todas as subclasses dessa classe (Herança)
// private - Só é acessível dentro da classe em que ele foi criado
export class Empresa {
  readonly nome: string; // Sem (public/private/protected) é automaticamente public. Inicializado pelo construtor
  private readonly colaboradores: Colaborador[] = []; // Inicializado diretamente
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  // public:
  adcionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  // public:
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // public:
  // Redundante, mas para explicar o acesso fora da classe:
  getName(): string {
    return this.nome;
  }
}

// Opção resumida do código acima (Neste caso é necessário utilizar o public/private/protected no construtor, pois aq não fica redundante
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '12.123.123/0001-11');

console.log(empresa1); // Empresa { colaboradores: [], nome: 'Udemy', cnpj: '12.123.123/0001-11' }
// empresa1.nome = 'Ifood'; //=> Cannot assign to 'nome' because it is a read-only property

const colaborador1 = new Colaborador('Joelma', 'Silva');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('Luisa', 'Silva');
empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
empresa1.adcionaColaborador({
  nome: 'Pedro',
  sobrenome: 'Silva',
});
console.log(empresa1); //Empresa {
//                        colaboradores: [
//                          Colaborador { nome: 'Joelma', sobrenome: 'Silva' },
//                          Colaborador { nome: 'Maria', sobrenome: 'Silva' },
//                          Colaborador { nome: 'Luisa', sobrenome: 'Silva' }
//                        ],
//                        nome: 'Udemy',
//                        cnpj: '12.123.123/0001-11'
//                     }

console.log(empresa1.nome); // Udemy
empresa1.mostrarColaboradores(); // Imprime apenas os colaboradores
