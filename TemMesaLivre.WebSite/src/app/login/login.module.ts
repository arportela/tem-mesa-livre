import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms"

import { LoginComponent} from "./login.component";
import { routing } from "./login.routing";
import { SharedModule } from "../shared/shared.module";

import { LoginService } from "./login.service";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    routing,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule {}
