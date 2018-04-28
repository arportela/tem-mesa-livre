import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/start/start.module#StartModule'
  }, {
    path: 'administrador/login',
    loadChildren: 'app/login/login.module#LoginModule'
  }, {
    path: 'recursos-humanos/login',
    loadChildren: 'app/login/login.module#LoginModule'
  }, {
    path: 'profissional/login',
    loadChildren: 'app/login/login.module#LoginModule'
  }, {
    path: 'administrador/cadastro',
    loadChildren: 'app/cadastro/cadastro.module#CadastroModule'
  }, {
    path: 'recursos-humanos/cadastro',
    loadChildren: 'app/cadastro/cadastro.module#CadastroModule'
  }, {
    path: 'profissional/cadastro',
    loadChildren: 'app/cadastro/cadastro.module#CadastroModule'
  }, {
    path: 'administrador/recuperar-senha',
    loadChildren: 'app/recuperar-senha/recuperar-senha.module#RecuperarSenhaModule'
  }, {
    path: 'recursos-humanos/recuperar-senha',
    loadChildren: 'app/recuperar-senha/recuperar-senha.module#RecuperarSenhaModule'
  }, {
    path: 'profissional/recuperar-senha',
    loadChildren: 'app/recuperar-senha/recuperar-senha.module#RecuperarSenhaModule'
  }, {
    path: 'administrador/locais',
    loadChildren: 'app/locais/locais.module#LocaisModule'
  }, {
    path: 'profissional/locais',
    loadChildren: 'app/locais/locais.module#LocaisModule'
  }, {
    path: 'recursos-humanos/profissionais',
    loadChildren: 'app/profissionais/profissionais.module#ProfissionaisModule'
  }, {
    path: 'profissional/profissionais',
    loadChildren: 'app/profissionais/profissionais.module#ProfissionaisModule'
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
