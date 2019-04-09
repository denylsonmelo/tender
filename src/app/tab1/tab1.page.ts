import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';

import { Aluno } from '../models/classes.model';
import { log } from 'util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  formularioToggle = new FormGroup({
    toggle: new FormControl(false, [])
  });

  formularioAluno = new FormGroup({
    matricula: new FormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
      // 2016 1 t inf 0 001
      // 2019 1 s pgp 0 270
      // ('(20)(0|1)([0-8])(1|2)(tinf)([0-9]{4})')
      Validators.pattern(
        '(20)(0|1)([0-9])(1|2)(t|s)(inf|edi|ele|pgp|adm|fis|qui)([0-9]){4}'
      )
    ]),
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    modulo: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3)
    ])
  });

  modoAdicao = false;
  titulo = 'Listagem de Alunos';
  alunoASerCadastrado = new Aluno('', '', '');
  alerta;

  alunos: Array<Aluno> = [];

  constructor(public alertController: AlertController) {

    const alunosCache = localStorage.getItem('alunos');
    if (alunosCache !== null) {
      this.alunos = JSON.parse(atob(alunosCache));
    }
  }

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

    // console.log(this.formularioAluno.value);
    // console.log(this.alunoASerCadastrado);

    /* this.alunos.push({
      nome: this.formularioAluno.value.nomeAluno,
      modulo: this.formularioAluno.value.moduloAluno,
      matricula: this.formularioAluno.value.matriculaAluno
    });*/

    this.alunos.push(this.formularioAluno.value);

    localStorage.setItem('alunos', btoa(JSON.stringify(this.alunos)));
    this.modoAdicao = false;

    await this.fecharAlerta();
  }

  trocouValorToggle() {
    this.modoAdicao = !this.modoAdicao;
    this.modoAdicao
      ? (this.titulo = 'Cadastro de Alunos')
      : (this.titulo = 'Listagem de Alunos');
  }
}
