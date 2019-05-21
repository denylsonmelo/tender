import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  login() {
    this.auth.logarComFacebook()
      .then(sucesso => {
        this.router.navigate(['/tabs/tab2']);
      })
      .catch(erro => {
        console.log('errrro');
      });
  }

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}
}
