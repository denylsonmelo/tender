import { Component } from '@angular/core';
import { Aluno } from '../models/classes.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modoAdicao = true;

  titulo = 'Listagem de Alunos';

  alunos: Array<Aluno> = [
    { nome: 'iuri', matricula: '20172tinf002', modulo: 'modulo IV' },
    { nome: 'elias', matricula: '20172tinf005', modulo: 'modulo IV' },
    { nome: 'davi', matricula: '20161tinf013', modulo: 'modulo 8' }
  ];

  trocouValorToggle() {
    this.modoAdicao
      ? (this.titulo = 'Cadastro de Alunos')
      : (this.titulo = 'Listagem de Alunos');
  }
}
