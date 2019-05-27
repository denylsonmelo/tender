import { Injectable } from '@angular/core';
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
export class TenderGuard implements CanActivate {
  constructor(private router: Router, private service: AutenticacaoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    this.service.user.subscribe(
      sucesso => {

        if (sucesso) {
          console.log('sucesso');

          return of(true);
        } else {
          console.log('caiu aqui');

          this.router.navigate(['/login']);
          return of(false);
        }
      });
      return of(false);
  }
}
