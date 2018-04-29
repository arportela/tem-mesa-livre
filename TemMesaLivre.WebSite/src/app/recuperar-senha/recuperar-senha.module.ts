import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecuperarSenhaComponent } from "./recuperar-senha.component";
import { routing } from "./recuperar-senha.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RecuperarSenhaComponent
  ],
  imports: [
    routing,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class RecuperarSenhaModule {}
