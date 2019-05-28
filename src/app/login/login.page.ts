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
  async login() {
    const alert = await this.exibirAlert();

    this.auth
      .logarComFacebook()
      .then(sucesso => {
        alert.dismiss();
        this.router.navigate(['/tabs/tab2']);
      })
      .catch(erro => {
        alert.dismiss();
        this.exibirToast(erro);
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

  async exibirAlert() {
    const alert = await this.alertController.create({
      message: 'Conectando ao facebook ...'
    });

    await alert.present();
    return alert;
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

  constructor(
    private auth: AutenticacaoService,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
}
