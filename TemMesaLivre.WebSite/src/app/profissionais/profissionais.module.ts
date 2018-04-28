import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { routing } from "./profissionais.routing";
import { ProfissionaisConsultarComponent } from './profissionais-consultar/profissionais-consultar.component';
import { ProfissionaisAlterarComponent } from './profissionais-alterar/profissionais-alterar.component';
import { ProfissionaisExcluirComponent } from './profissionais-excluir/profissionais-excluir.component';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfissionaisConsultarComponent,
    ProfissionaisAlterarComponent,
    ProfissionaisExcluirComponent,
    SharedComponent
  ],
  imports: [
    routing,
    CommonModule,
    SharedModule
  ]
})

export class ProfissionaisModule {}
