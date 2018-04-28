import { RouterModule, Routes } from "@angular/router";

import { ProfissionaisConsultarComponent } from './profissionais-consultar/profissionais-consultar.component';
import { ProfissionaisAlterarComponent } from './profissionais-alterar/profissionais-alterar.component';
import { ProfissionaisExcluirComponent } from './profissionais-excluir/profissionais-excluir.component';

export const routes: Routes = [

  {
    path: 'consultar',
    component: ProfissionaisConsultarComponent
  },
  {
    path: 'alterar',
    component: ProfissionaisAlterarComponent
  },
  {
    path: 'excluir',
    component: ProfissionaisExcluirComponent
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

export const routing = RouterModule.forChild(routes);
