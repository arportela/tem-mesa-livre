import { RouterModule, Routes } from "@angular/router";

import { LocaisConsultarComponent } from "./locais-consultar/locais-consultar.component";
import { LocaisAlterarComponent } from "./locais-alterar/locais-alterar.component";
import { LocaisExcluirComponent } from "./locais-excluir/locais-excluir.component";
import { LocaisCriarComponent } from "./locais-criar/locais-criar.component";

export const routes: Routes = [

  {
    path: "consultar",
    component: LocaisConsultarComponent
  },
  {
    path: "alterar",
    component: LocaisAlterarComponent
  },
  {
    path: "excluir",
    component: LocaisExcluirComponent
  },
  {
    path: "criar",
    component: LocaisCriarComponent
  },
  {
    path: "",
    redirectTo: "consultar"
  },
  {
    path: "**",
    redirectTo: "consultar"
  }
];

export const routing = RouterModule.forChild(routes);
