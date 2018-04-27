import { RouterModule, Routes } from "@angular/router";

import { LoginProfissionaisComponent } from "./login-profissionais.component";

export const routes: Routes = [

  {
    path: '',
    component: LoginProfissionaisComponent
  }
];

export const routing = RouterModule.forChild(routes)
