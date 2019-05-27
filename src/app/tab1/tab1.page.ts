import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

usuario;

  logout() {
    this.auth.logout();
  }


  constructor(private auth: AutenticacaoService) {
    this.usuario = this.auth.user;
  }
}
