import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  buscarAdsSlides(): Observable<any> {
    return this.store.collection(`ads-slides-tender`).valueChanges();
  }

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
