import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ModalModule } from "ngx-bootstrap";

import { routing } from "./locais.routing";
import { LocaisConsultarComponent } from "./locais-consultar/locais-consultar.component";
import { LocaisAlterarComponent } from "./locais-alterar/locais-alterar.component";
import { LocaisExcluirComponent } from "./locais-excluir/locais-excluir.component";
import { LocaisManterComponent } from "./shared/locais-manter.component";
import { SharedModule } from "../shared/shared.module";
import { LocaisCriarComponent } from './locais-criar/locais-criar.component';

import { LocaisManterDialogComponent } from './shared/dialog/locais-manter.dialog.component';

import { PopoverModule } from "ngx-popover";

@NgModule({
  declarations: [
    LocaisConsultarComponent,
    LocaisAlterarComponent,
    LocaisExcluirComponent,
    LocaisManterComponent,
    LocaisCriarComponent,
    LocaisManterDialogComponent
  ],
  imports: [
    routing,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    PopoverModule
  ]
})

export class LocaisModule {}
