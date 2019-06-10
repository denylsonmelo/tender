import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { AutenticacaoService } from '../services/autenticacao.service';
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

  @ViewChild('slides') slides: IonSlides;

  ngOnInit() {
    this.slides.startAutoplay();
  }

  logout() {
    this.autenticacao.logout();
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
