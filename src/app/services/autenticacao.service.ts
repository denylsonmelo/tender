import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  user: Observable<firebase.User>;

  constructor(private autenticacao: AngularFireAuth) {
    this.user = autenticacao.authState;
  }

  logarComFacebook(): Promise<any> {
      const provider = new firebase.auth.FacebookAuthProvider();
      // provider.addScope('user_birthday');
      return this.autenticacao.auth
        .signInWithPopup(provider);
 }

  criarUsuario(usuario: string, senha: string) {
    this.autenticacao.auth
      .createUserWithEmailAndPassword(usuario, senha)
      .then(sucesso => {
        console.log(sucesso);
      }) // quando dar certo
      .catch(erro => {
        console.log(erro);
      }); // quando dar erro
  }

  logar(usuario: string, senha: string) {
    this.autenticacao.auth
      .signInWithEmailAndPassword(usuario, senha)
      .then(sucesso => {
        console.log(sucesso);
      }) // quando dar certo
      .catch(erro => {
        console.log(erro);
      }); // quando dar erro
  }

  logout() {
    this.autenticacao.auth.signOut();
  }
}
