import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CNPJInputMaskDirective } from "./cnpj.input-mask.directive";

@NgModule({
  declarations: [
    CNPJInputMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CNPJInputMaskDirective
  ]
})

export class InputMaskModule { }
