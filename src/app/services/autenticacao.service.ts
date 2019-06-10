import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { ArmazenamentoService } from './armazenamento.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  user: Observable<firebase.User>;
  private autenticado = false;

  constructor(
    private autenticacao: AngularFireAuth,
    private armazenamento: ArmazenamentoService,
    private router: Router
    ) {
      console.log('entrou');

    this.user = autenticacao.authState;
  }

  getAuth(){
    return this.autenticacao.auth;
  }

  logarComFacebook(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    return this.autenticacao.auth
      .signInWithPopup(provider)
      .then(sucesso => {

        this.autenticado = true;

        const usuario = {
          nome: sucesso.user.displayName,
          email: sucesso.user.email,
          urlImagem: sucesso.user.photoURL,
          uid: sucesso.user.uid,
          // dataNascimento: sucesso.additionalUserInfo.profile.birthday,
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

  estaAutenticado() {

    this.user.toPromise()
    .then(valor => {
      console.log('valor');
      console.log(valor);

    })
    .catch(erro => {
      console.log('erro');
      console.log(erro);

    });


    return false;
  }

  logout() {
    this.autenticacao.auth.signOut();
    this.autenticado = false;
    this.router.navigate(['/login']);
  }
}
