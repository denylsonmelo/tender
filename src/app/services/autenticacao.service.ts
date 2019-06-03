import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { ArmazenamentoService } from './armazenamento.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  user: Observable<firebase.User>;

  constructor(
    private autenticacao: AngularFireAuth,
    private armazenamento: ArmazenamentoService
    ) {
    this.user = autenticacao.authState;
  }

  logarComFacebook(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    return this.autenticacao.auth
      .signInWithPopup(provider)
      .then(sucesso => {

        const usuario = {
          nome: sucesso.user.displayName,
          email: sucesso.user.email,
          urlImagem: sucesso.user.photoURL,
          uid: sucesso.user.uid,
          dataNascimento: sucesso.additionalUserInfo.profile.birthday,
        };

        this.armazenamento.salvar('usuarios', usuario);

        return Promise.resolve();
      })
      .catch(erro => {
        return Promise.reject(erro.message);
      });


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
