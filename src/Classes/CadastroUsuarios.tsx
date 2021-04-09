
export default class CadastroUsers {
  Id: string;
  Nome: String;
  Email: string;
  DataNascimento: string;
  constructor(id:string, nome: string, email: string, Nascimento: string) {
    this.Id = id;
    this.Nome = nome;
    this.Email = email;
    this.DataNascimento = Nascimento;
  }
}