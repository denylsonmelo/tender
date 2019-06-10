import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuario: any;

  logout() {
    this.autenticacao.logout();
  }
  outrometodo() {
    this.router.navigate(['/perfil']);
  }

  constructor(
    private autenticacao: AutenticacaoService,
    private router: Router
  ) {
    this.autenticacao.user.subscribe(dado => {
      this.usuario = dado.providerData[0] || '';
    });
  }
}
