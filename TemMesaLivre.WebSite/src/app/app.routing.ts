import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'start', pathMatch: 'full'
  }, {
    path: 'start',
    loadChildren: 'app/start/start.module#StartModule'
  }, {
    path: 'login-administrador',
    loadChildren: 'app/login-administrador/login-administrador.module#LoginAdministradorModule'
  }, {
    path: 'login-rh',
    loadChildren: 'app/login-rh/login-rh.module#LoginRHModule'
  }, {
    path: 'login-profissionais',
    loadChildren: 'app/login-profissionais/login-profissionais.module#LoginProfissionaisModule'
  }, {
    path: 'profissionais',
    loadChildren: 'app/profissionais/profissionais.module#ProfissionaisModule'
  }, {
    path: 'locais',
    loadChildren: 'app/locais/locais.module#LocaisModule'
  }, {
    path: '**', redirectTo: 'erro404', pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
