import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class TenderGuard implements CanActivate {
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
}
