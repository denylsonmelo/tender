import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TenderGuard } from './guard/tender.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'perfil',
    loadChildren: './perfil/perfil.module#PerfilPageModule' ,
    // canActivate: [TenderGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login-com-email', loadChildren: './login-com-email/login-com-email.module#LoginComEmailPageModule' },
  { path: 'registre-se', loadChildren: './registre-se/registre-se.module#RegistreSePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
