import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit {
  perfis: Observable<any[]>;

  constructor(banco: AngularFirestore) {
    this.perfis = banco.collection('/perfis').valueChanges();
    console.log(this.perfis);

  }

  ngOnInit() {}
}
