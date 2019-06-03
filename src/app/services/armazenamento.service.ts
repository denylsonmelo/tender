import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {
  public salvar(colecao: string, dado: any) {
    // const id: string = Object.assign("", dado.uid);

    // console.log(id);


    // delete dado.uid;

    this.store
      .doc(`/${colecao}/${dado.uid}`)
      .set(dado);
  }

  constructor(private store: AngularFirestore) {}
}
