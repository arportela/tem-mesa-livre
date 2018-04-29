import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecuperarSenhaComponent } from "./recuperar-senha.component";
import { routing } from "./recuperar-senha.routing";
import { SharedModule } from "../shared/shared.module";
import { RecuperarSenhaService } from "./recuperar-senha.service";

@NgModule({
  declarations: [
    RecuperarSenhaComponent
  ],
  imports: [
    routing,
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    RecuperarSenhaService
  ]
})

export class RecuperarSenhaModule {}
