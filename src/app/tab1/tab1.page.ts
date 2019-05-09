import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuario: string;
  senha: string;

  constructor(public auth: AuthService) {}

  criarUsuario() {
    this.auth.criarUsuario(this.usuario, this.senha);
  }

  sair(){
    this.auth.logout();
  }

  login(){
    this.auth.logar(this.usuario, this.senha);
  }
}
