import { RouterModule, Routes } from "@angular/router";

import { LoginAdministradorComponent } from "./login-administrador.component";

export const routes: Routes = [

  {
    path: '',
    component: LoginAdministradorComponent
  }
];

export const routing = RouterModule.forChild(routes)
