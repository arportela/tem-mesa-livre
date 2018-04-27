import { RouterModule, Routes } from "@angular/router";

import { LoginRhComponent } from "./login-rh.component";

export const routes: Routes = [

  {
    path: '',
    component: LoginRhComponent
  }
];

export const routing = RouterModule.forChild(routes)
