import { RouterModule, Routes } from "@angular/router";

import { RecuperarSenhaComponent } from "./recuperar-senha.component";

export const routes: Routes = [

  {
    path: '',
    component: RecuperarSenhaComponent
  }
];

export const routing = RouterModule.forChild(routes);
