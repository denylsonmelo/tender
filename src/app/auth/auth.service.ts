import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  constructor(private autenticacao: AngularFireAuth) {
    this.user = autenticacao.authState;

   }

   login() {
     this.autenticacao
      .auth
      .signInWithEmailAndPassword('email', 'senha')
      .then() // quando dar certo
      .catch(); // quando dar erro
   }
}
