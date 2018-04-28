import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { CadastroComponent } from "./cadastro.component";
import { routing } from "./cadastro.routing";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    routing,
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class CadastroModule {}
