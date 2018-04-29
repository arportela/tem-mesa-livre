import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routing } from "./locais.routing";
import { LocaisConsultarComponent } from "./locais-consultar/locais-consultar.component";
import { LocaisAlterarComponent } from "./locais-alterar/locais-alterar.component";
import { LocaisExcluirComponent } from "./locais-excluir/locais-excluir.component";
import { SharedComponent } from "./shared/shared.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LocaisConsultarComponent,
    LocaisAlterarComponent,
    LocaisExcluirComponent,
    SharedComponent
  ],
  imports: [
    routing,
    CommonModule,
    SharedModule
  ]
})

export class LocaisModule {}
