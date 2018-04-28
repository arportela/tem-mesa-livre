import { RouterModule, Routes } from "@angular/router";

import { CadastroComponent } from "./cadastro.component";

export const routes: Routes = [

  {
    path: '',
    component: CadastroComponent
  }
];

export const routing = RouterModule.forChild(routes);
