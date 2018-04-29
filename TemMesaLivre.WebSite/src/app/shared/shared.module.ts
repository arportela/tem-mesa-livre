import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { InputMaskModule } from "./input-masks/input-mask.module";
import { EventModule } from "./event/event.module";
import { SessionModule } from "./session/session.module";
import { FormControlDirective, FormGroupDirective } from "./validation/form-control.directive";
import { SpecificationModule } from "./specifications/specification.module";
import { GuardModule } from "./guard/guard.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FormControlDirective,
    FormGroupDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    InputMaskModule,
    EventModule,
    SessionModule,
    SpecificationModule,
    GuardModule
  ],
  exports: [
    HeaderComponent,
    InputMaskModule,
    EventModule,
    FormControlDirective,
    SpecificationModule,
    FormGroupDirective,
    GuardModule
  ]
})

export class SharedModule { }
