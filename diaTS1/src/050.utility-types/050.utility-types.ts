// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - Torna tudo "requerido"
type PessoaRequired = Required<PessoaProtocol>;
// Partial - Torna tudo opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly - Torna tudo Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick - Permite escolher quais itens você quer utilizar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Computa todos os tipos que estão em ABC que náo estão em CDE : 'A' | 'B'
type TipoExtract = Extract<ABC, CDE>; // Computa todos os itens que estão em ABC que podem ser atribuídos aos tipos de CDE : 'C'

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'kjashldjhaskjd',
  nome: 'Joelma',
  idade: 29,
  sobrenome: 'Silva',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
