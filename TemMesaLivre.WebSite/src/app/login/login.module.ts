import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common";

import { LoginComponent} from "./login.component";
import { routing } from "./login.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    routing,
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ]
})

export class LoginModule {}
