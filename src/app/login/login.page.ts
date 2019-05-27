import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  login() {

    alert.present();

    this.auth.logarComFacebook()
      .then(sucesso => {

        alert.dismiss();

        this.router.navigate(['/tabs/tab2']);
      })
      .catch(erro => {

        alert.dismiss();
        toast.present();

        console.log('errrro');
        console.log(erro);
      });
  }

  irParaLoginEmail() {
    this.router.navigate(['/login-com-email']);
  }

  irParaRegistro() {
    this.router.navigate(['/registre-se']);
  }

  constructor(
    private auth: AutenticacaoService,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) {}

  ngOnInit() {}
}
