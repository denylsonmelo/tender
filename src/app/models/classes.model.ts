export class Pessoa {
  constructor(
    public nome: string,
    public dataNascimento: Date,
    public sexo: string,
    public descricao: string,
    public localizacao: string,
    public emprego: string,
    public estudo: string,
    public urlImagem: string,
    public mostrarIdade: boolean = true,
    public mostrarLocalizacao: boolean = true,
  ) {}
}
