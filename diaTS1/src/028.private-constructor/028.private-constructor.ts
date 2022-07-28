// Singleton - GoF - Criar só e somente só uma instância de determinada classe
// Factory Method - GoF - Método dentro da classe que cria um novo objeto;
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  //Factory method:
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456'); // A primeira vez cria
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456'); // Nesta vez e nas seguintes ele apenas retorna o valor já existente
db2.connect();
const db3 = Database.getDatabase('localhost', 'root', '123456'); // Nesta vez e nas seguintes ele apenas retorna o valor já existente
db2.connect();

console.log(db1 === db2); //true
console.log(db2 === db3); //true
