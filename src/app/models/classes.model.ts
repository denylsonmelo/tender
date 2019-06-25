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
    public mostrarLocalizacao: boolean = true
  ) {}
}
export class SlidesAds {
  constructor(
    public iconName: string = '',
    public iconColor: string = '',
    public slideName: string = '',
    public slideDescription: string = ''
  ) {}
}
