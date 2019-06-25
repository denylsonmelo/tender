import { Component } from '@angular/core';

import { AutenticacaoService } from '../services/autenticacao.service';
import { ArmazenamentoService } from '../services/armazenamento.service';
import { SlidesAds } from '../models/classes.model';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuario: any;
  slidesAds: Array<SlidesAds>;

  logout() {
    this.autenticacao.logout();
  }

  constructor(
    private autenticacao: AutenticacaoService,
    private armazenamento: ArmazenamentoService
  ) {
    this.autenticacao.user.subscribe(dado => {
      this.usuario = dado.providerData[0] || '';
    });

    this.armazenamento.buscarAdsSlides().subscribe(dado => {
      this.slidesAds = dado;
    });
  }
}
