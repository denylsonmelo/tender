import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { AutenticacaoService } from '../services/autenticacao.service';
import { ArmazenamentoService } from '../services/armazenamento.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  usuario: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  slidesAds: Array<any>;

  @ViewChild('slides') slides: IonSlides;

  ngOnInit() {
    this.slides.startAutoplay();
  }

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
      console.log(dado);
      this.slidesAds = dado;
    });
  }
}
