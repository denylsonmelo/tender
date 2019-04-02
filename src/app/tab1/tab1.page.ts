import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AlertController } from '@ionic/angular';

import { Aluno } from '../models/classes.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formularioAluno = new FormGroup({
    matriculaAluno: new FormControl(''),
    nomeAluno: new FormControl(''),
    moduloAluno: new FormControl(''),
  });

  modoAdicao = true;
  titulo = 'Listagem de Alunos';
  alunoASerCadastrado = new Aluno('', '', '');
  alerta;

  alunos: Array<Aluno> = [
    { nome: 'iuri', matricula: '20172tinf002', modulo: 'modulo IV' },
    { nome: 'elias', matricula: '20172tinf005', modulo: 'modulo IV' },
    { nome: 'davi', matricula: '20161tinf013', modulo: 'modulo 8' }
  ];

  constructor(public alertController: AlertController) {}

  async exibirAlerta() {
     this.alerta = await this.alertController.create({
      message: 'Salvando ...',
      backdropDismiss: false,
      mode: 'ios',
      translucent: true
    });

    await this.alerta.present();
  }

  async fecharAlerta() {
    await this.alerta.dismiss();
  }

  async adicionar() {
    await this.exibirAlerta();

    // localStorage.setItem('alunoCadastradoAgora', this.alunoASerCadastrado.nome);

    this.alunos.push(this.alunoASerCadastrado);
    this.alunoASerCadastrado = new Aluno('', '', '');
    this.modoAdicao = false;

    await this.fecharAlerta();
  }

  trocouValorToggle() {
    this.modoAdicao
      ? (this.titulo = 'Cadastro de Alunos')
      : (this.titulo = 'Listagem de Alunos');
  }
}
