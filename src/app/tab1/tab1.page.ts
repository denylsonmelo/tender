import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

usuario

  logout() {
    this.auth.logout();
  }


  constructor(private auth: AuthService) {
    this.usuario = this.auth.user;
  }
}
