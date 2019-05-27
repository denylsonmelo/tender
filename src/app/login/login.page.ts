import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  login() {
    this.auth
      .logarComFacebook()
      .then(sucesso => {
        console.log(sucesso);

        const usuario = {
          nome: sucesso.user.displayName,
          email: sucesso.user.email,
          urlImagem: sucesso.user.photoURL,
          uid: sucesso.user.uid,
          dataNascimento: sucesso.additionalUserInfo.profile.birthday,
        };

        /*this.store.doc(`/usuarios/${usuario.uid}`).set(usuario)
          .then(novoSucesso => {
            console.log('novo sucesso');
            console.log(novoSucesso);
          })
          .catch(novoErro => {
            console.log('novo sucesso');
            console.log(novoErro);
          });
*/
        this.router.navigate(['/tabs/tab2']);
      })
      .catch(erro => {
        console.log('errrro');
        console.log(erro);
      });
  }

  constructor(
    private auth: AutenticacaoService,
    private router: Router,
  ) {}

  ngOnInit() {}
}
