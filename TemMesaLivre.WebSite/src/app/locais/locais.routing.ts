import { RouterModule, Routes } from "@angular/router";

import { LocaisConsultarComponent } from './locais-consultar/locais-consultar.component';
import { LocaisAlterarComponent } from './locais-alterar/locais-alterar.component';
import { LocaisExcluirComponent } from './locais-excluir/locais-excluir.component';

export const routes: Routes = [

  {
    path: 'consultar',
    component: LocaisConsultarComponent
  },
  {
    path: 'alterar',
    component: LocaisAlterarComponent
  },
  {
    path: 'excluir',
    component: LocaisExcluirComponent
  },
  {
    path: '',
    redirectTo: "consultar"
  },
  {
    path: '**',
    redirectTo: "consultar"
  }
];

export const routing = RouterModule.forChild(routes)
