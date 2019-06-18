import { Component } from '@angular/core';
import { Pessoa } from '../models/classes.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pessoas: Array<Pessoa> = [
    {
      nome: 'Steve Rogers',
      dataNascimento: new Date(1918, 7, 4),
      sexo: 'masculino',
      descricao: 'melhor idade, já fui um picolé em gelo, vintage',
      localizacao: 'wakanda',
      emprego: 'nomade',
      estudo: 'tenho',
      mostrarIdade: true,
      mostrarLocalizacao: true,
      urlImagem: './../../assets/images/capitao.jpeg'
    },
    {
      nome: 'Natasha Romanova',
      dataNascimento: new Date(1928, 7),
      sexo: 'feminino',
      descricao: 'ferrões, relacionamentos complicados, contorcionistas',
      localizacao: 'wakanda',
      emprego: 'KGB, Shield, Vingadores',
      estudo: 'Balé (professora e bailarina), espiã, vingadora',
      mostrarIdade: true,
      mostrarLocalizacao: true,
      urlImagem: './../../assets/images/scarlet04.jpg'
    }
  ];

  calcularAnos() {
    const diferencaDatas =  Date.now() - this.pessoas[1].dataNascimento.getTime();
    const anos = new Date(diferencaDatas);
    return Math.abs(anos.getUTCFullYear() - 1970);
  }
}
