import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class TenderGuard implements CanActivate, OnInit {
  constructor(private router: Router, private service: AutenticacaoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {
      this.service.getAuth().onAuthStateChanged(user => {
        if (!user) {
          this.router.navigate(['/login']);
        }
        resolve(user ? true : false);
      });
    });
  }

  ngOnInit(): void {
    console.log('init do guard');
  }
}
