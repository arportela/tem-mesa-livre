import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { RequiredSpecificationService } from './required.specification.service';
import { CNPJSpecificationService } from './cnpj.specification.service';
import { EmailSpecificationService } from './email.specification.service';
import { PasswordSpecificationService } from './password.specification.service';
import { PasswordEqualsSpecificationService } from './password-equals.specification.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    RequiredSpecificationService,
    CNPJSpecificationService,
    EmailSpecificationService,
    PasswordSpecificationService,
    PasswordEqualsSpecificationService
  ]
})

export class SpecificationModule { }
