import { NgModule } from "@angular/core";

import { LoginAdministradorComponent
} from "./login-administrador.component";
import { routing } from "./login-administrador.routing";

@NgModule({
  declarations: [
    LoginAdministradorComponent
  ],
  imports: [
    routing
  ]
})

export class LoginAdministradorModule {}
